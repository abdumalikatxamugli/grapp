import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Transh, PaymentForm, MyTable } from '../../components/';
import currencies from '../../constants/currencies';
import { summation } from "../../helpers/summation";
import { transhesUpdate } from '../../redux/actions/transh';
const { ipcRenderer } = window.require('electron');

const Payment = (props) => {
	const dispatch = useDispatch();
	// const contracts = useSelector(state => state.contractReducer);
	// const globalAnketa = useSelector(state => state.anketaReducer);
	// const oplatas = useSelector(state => state.oplataReducer);
	// const globalTransh = useSelector(state => state.transhReducer);

	const anketa = useSelector(state => state.anketaReducer);
	const [transh, setTranshState] = useState(false);
	const [contracts, setContracts] = useState([]);
	const [oplatas, setOplatas] = useState([]);
	const controlTransh = (val) => {
		setTranshState(val);
		if (!val) {
			dispatch(transhesUpdate([]));
		}
	}
	useEffect(() => {
		ipcRenderer.send("get-payment", anketa.id);
		ipcRenderer.on("get-payment", load);
		return ()=>{
			ipcRenderer.removeListener('get-payment', load);
		}
	}, [])

	const load=(event, payload)=>{
		const contracts=payload.contracts.map(item=>item.dataValues);
        const oplatas=payload.oplatas.map(item=>item.dataValues);
		setContracts(contracts)
		setOplatas(oplatas)
	}
	return (
		<>
			<div className="row">
				<div className="col-md-6">
					<div className="mb-10">
						Условие оплаты:
	    		</div>
					<div >
						<div className="mb-10">
							<input type="radio"
								onClick={() => controlTransh(false)}
								id="once" name="oplata" defaultChecked={!transh}
								disabled={oplatas.length !== 0}
							/>
							<label htmlFor="once">
								Единовременная оплата
		    				</label>
						</div>
						<div className="mb-10">
							<input type="radio"
								onClick={() => controlTransh(true)}
								id="transh" name="oplata" defaultChecked={transh}
								disabled={oplatas.length !== 0}
							/>
							<label htmlFor="transh">
								Оплата траншами
		    				</label>
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="mb-10">
						Страховая сумма: {summation([...contracts.map(item => item.insuranceAmount)])}
					</div>
					<div className="mb-10">
						Премия:	{summation([...contracts.map(item => item.premiyaAmount)])}
					</div>
					<div className="mb-10">
						Учет: {currencies[anketa.VAL_TYPE] ?? ""}
					</div>
					<div className="mb-10">
						Оплата:	{currencies[anketa.VAL_TYPE] ?? ""}
					</div>
				</div>
			</div>
			{
				transh && <Transh />
			}
			<div>
				<h4 className="mb-4">Оплата</h4>
				<MyTable columns={
					[
						{
							title: 'Дата оплаты',
							dataIndex: 'OPL_DATA',
							filtered: false
						},
						{
							title: 'Оплата',
							dataIndex: 'OPL_SUMMA',
							filtered: false
						},
						{
							title: 'Тип оплаты',
							dataIndex: 'OPL_TYPE',
							filtered: false
						},
						{
							title: 'Пользователь',
							dataIndex: '',
							filtered: false
						},
						{
							title: 'Ком.%',
							dataIndex: '',
							filtered: false
						},
						{
							title: 'Комиссия',
							dataIndex: '',
							filtered: false
						},
						{
							title: 'Агент.согл.',
							dataIndex: '',
							filtered: false,
						}
					]
				}
					data={oplatas}
				/>
				{oplatas.length === 0 && <div>Оплата не произведена</div>}
				<div className="mt-4">Остаток:	<b>{summation([...contracts.map(item => item.premiyaAmount)])}</b></div>
			</div>
			<PaymentForm />
		</>
	)
}

export default Payment;