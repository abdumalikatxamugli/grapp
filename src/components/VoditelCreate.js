import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { voditelAdd } from '../redux/actions/transport';
const { ipcRenderer } = window.require("electron");

const VoditelCreate = (props) => {
	const dispatch = useDispatch()
	const [voditelForm, setVoditelForm] = useState({})
	useEffect(() => {
		ipcRenderer.on('voditel-saved', save2);
		return ()=>{
			ipcRenderer.removeListener('voditel-saved', save2);
		}
	}, [])
	const changeHandler = (e) => {
		setVoditelForm({ ...voditelForm, [e.target.name]: e.target.value })
	}
	
	const save = () => {
		ipcRenderer.send('voditel-create', {...voditelForm, TRANSPORT_ID:props.transport_id});
	}
	const save2 = (event, args) => {
		props.setShow(false)
		alert("Voditel saved");
	}
	return (
		<form className="voditel">
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Фамилия:
    		</div>
				<div className="col-md-8">
					<input type="text" name="TB_SURNAME" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Имя:
    		</div>
				<div className="col-md-8">
					<input type="text" name="TB_NAME" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Отчество:
    		</div>
				<div className="col-md-8">
					<input type="text" name="TB_PATRONYM" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Дата рождения:
    		</div>
				<div className="col-md-8">
					<input type="date" name="TB_DATEBIRTH" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Стаж:
    		</div>
				<div className="col-md-8">
					<input type="number" name="TB_STAJ" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Права №:
    		</div>
				<div className="col-md-8">
					<div className="passport">
						<input type="text" name="TB_PRAVA_SERY" onChange={changeHandler} />
						<input type="text" name="TB_PRAVA_NUMBER" onChange={changeHandler} />
					</div>
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Права РЭО:
    		</div>
				<div className="col-md-8">
					<input type="text" name="TB_PRAVA_REO" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Дата выдачи:
    		</div>
				<div className="col-md-8">
					<input type="date" name="TB_PRAVA_DATE" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Дата:
    		</div>
				<div className="col-md-8">
					<input type="date" name="TB_DATE" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Паспорт №:
    		</div>
				<div className="col-md-8">
					<div className="passport">
						<input type="text" name="TB_PASPSERY" onChange={changeHandler} />
						<input type="text" name="TB_PASPNUMBER" onChange={changeHandler} />
					</div>
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Место выдачи:
    		</div>
				<div className="col-md-8">
					<input type="text" name="TB_PASPVIDAN" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Дата выдачи:
    		</div>
				<div className="col-md-8">
					<input type="date" name="TB_PASPDATE" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Дата преобритения:
    		</div>
				<div className="col-md-8">
					<input type="date" name="TB_PRAVA_DATE0" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Доверенность №:
    		</div>
				<div className="col-md-8">
					<input type="text" name="TB_DOVERENNOST_NUM" onChange={changeHandler} />
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Пол:
    		</div>
				<div className="col-md-8">
					<select name="TB_SEX" onChange={changeHandler}>
						<option value="1">Муж.</option>
						<option value="0">Жен.</option>
					</select>
				</div>
			</div>
			<div className="row mb-10">
				<div className="col-md-4 v-center-right">
					Права категория:
    		</div>
				<div className="col-md-8 sparse">
					<span>A</span>
					<input value="A" type="checkbox" name="TB_PRAVA_CATEGORY" onChange={changeHandler} />
					<span>B</span>
					<input value="B" type="checkbox" name="TB_PRAVA_CATEGORY" onChange={changeHandler} />
					<span>C</span>
					<input value="C" type="checkbox" name="TB_PRAVA_CATEGORY" onChange={changeHandler} />
					<span>D</span>
					<input value="D" type="checkbox" name="TB_PRAVA_CATEGORY" onChange={changeHandler} />
					<span>E</span>
					<input value="E" type="checkbox" name="TB_PRAVA_CATEGORY" onChange={changeHandler} />
				</div>
			</div>
			<div className="row">
				<div className="col-md-4">

				</div>
				<div className="col-md-8 sparse">
					<button className="bg-skyblue" type="button" onClick={save}>Save</button>
				</div>
			</div>
		</form>
	)
}

export default VoditelCreate;