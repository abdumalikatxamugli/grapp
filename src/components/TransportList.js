import React, { Fragment, useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import addImage from '../assets/icons/add.svg';
import editImg from '../assets/icons/edit.svg';
import VoditelCreate from './VoditelCreate';
import VoditelTable from './VoditelTable';
import VoditelList from './VoditelList';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { transportRemove } from '../redux/actions/transport';
const { ipcRenderer } = window.require("electron");

const TransportList = (props) => {
	const dispatch = useDispatch();

	const anketa=useSelector(state=>state.anketaReducer);
	const [transports, setTransports] = useState([]);
	const [u, forceUpdate]=useState([]);
	const [voditelModalShow, setVoditelModalShow] = useState({
		status: false,
		index: 0
	});
	useEffect(() => {
		ipcRenderer.send("get-transports",anketa.id);
		ipcRenderer.on('transport-deleted', remove2);
		ipcRenderer.on("get-transports", list);
		ipcRenderer.on("delete-voditel",removeVoditel2);
		
		return ()=>{
			ipcRenderer.removeListener('get-transports', list);
			ipcRenderer.removeListener('transport-deleted', remove2);
			ipcRenderer.removeListener("delete-voditel",removeVoditel2);
		} 
	}, []);
	const list=(event, payload)=>{
		
		setTransports(payload);
	}
	const remove = (id) => {
		ipcRenderer.send('transport-delete', id);

	}
	const remove2 = (event, deleted_id) => {
		ipcRenderer.send("get-transports",anketa.id);
	}	
	const drop = (ev) => {
		ev.currentTarget.parentNode.parentNode.classList.toggle("open");
	}
	const removeVoditel=(id)=>{
		ipcRenderer.send("delete-voditel",id);
	}
	const removeVoditel2=(event)=>{
		forceUpdate([]);
	}
	if (transports.length) {
		return (
			<>
			<Modal show={voditelModalShow.status} setShow={() => setVoditelModalShow({ ...voditelModalShow, status: false })}>
			<VoditelList changedAttribute="VODITEL">
			<VoditelTable transport_id={voditelModalShow.index} setShow={() => setVoditelModalShow({ ...voditelModalShow, status: false })} />
			<VoditelCreate transport_id={voditelModalShow.index} setShow={() => setVoditelModalShow({ ...voditelModalShow, status: false })} />
			</VoditelList>
			</Modal>
			<table className="transportTable bordered-table" border="1">
			<thead >
			<tr>
			<th width="3%">

			</th>
			<th>
			Марка и Модель
			</th>
			<th>
			Регистр. №
			</th>
			<th>
			Год выпуска
			</th>
			<th>
			Действия
			</th>
			</tr>
			</thead>
			<tbody>
			{transports.map((item, idx) => {
				return (
					<Fragment key={`transportlist${idx}`}>
					<tr className="closed">
					<td>
					<img src={addImage}
					className="cursor-pointer"
					onClick={(e) => drop(e)}
					alt="expand"
					/>
					</td>
					<td>
					{item.TB_MARKA} {item.TB_MODEL}
					</td>
					<td>
					{item.TB_REGNUMBER}
					</td>
					<td>
					{item.TB_YEAR}
					</td>
					<td>
					<button onClick={() => remove(item.id)}>
					Удалить
					</button>
					</td>
					</tr>
					<tr>
					<td colSpan="4">
					<div className="thedrop">
					<div className="row">
					<div className="col-md-4 attrs">
					<span>Цвет:</span>
					<span>
					{item.TB_COLOR}
					</span>
					</div>
					<div className="col-md-4 attrs">
					<span>№ кузова (шасси):</span>
					<span>
					{item.TB_KUZOV}

					</span>
					</div>
					<div className="col-md-4 attrs">
					<span>№ двигателя:</span>
					<span>

					{item.TB_DVIGATEL}

					</span>
					</div>
					<div className="col-md-4 attrs">
					<span>№ тех. паспорта:</span>
					<span>
					{item.TB_TEXPSERY} {item.TEXPNUMBER}
					</span>
					</div>
					<div className="col-md-4 attrs">
					<span>Стоимость ТС:</span>
					<span>
					{item.TB_STOIMOST}
					</span>
					</div>
					<div className="col-md-4 attrs">
					<span>Противоугонная сигнализация:</span>
					<span>
					<input type="checkbox" disabled defaultChecked={item.TB_SIGNAL} />
					</span>
					</div>
					</div>
					<div className="row">
					<div className="col-md-12 attrs">
					<div className="v-center">
					Водители № доверенности, прав (категория):
					<button onClick={() => setVoditelModalShow({status: true, index: item.id})} className="bg-skyblue p-0">
					<img src={addImage}
					className="cursor-pointer"
					alt="expand"
					/>
					</button>
					</div>
					<ul>
					{item.Voditels.map((voditel, indx) => 
						<li>
						{voditel.dataValues.TB_NAME}
						<button 
						className="remove"
						onClick={e=>removeVoditel(voditel.dataValues.id)}
						>
						remove
						</button>
						</li>
						)
				}	
				
				</ul>
				</div>
				<div className="col-md-12 attrs">
				<div>
				Примечания (наличие повреждений):
				</div>
				<div>
				{item.TB_COMMENT}
				</div>
				</div>
				</div>
				<div className="editBtnCnt">
				<button>
				<img src={editImg} alt="edit" className="cursor-pointer" />
				</button>
				</div>
				</div>
				</td>
				</tr>
				</Fragment>)
			})}
			</tbody>
			</table>
			</>
			)
		} else {
			return <p>Нет выбранных объектов</p>
		}

	}

	export default TransportList;