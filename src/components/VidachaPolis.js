import React, {useEffect, useState} from "react"
import {useSelector} from 'react-redux';
const { ipcRenderer } = window.require('electron');

const VidachaPolis=(props)=>{
	const anketa=useSelector(state=>state.anketaReducer);
	const [oplatas, setOplatas]=useState([]);
	const [transhes, setTranshes] = useState([]);
	const [transports, setTransports] = useState([]);
    const [polises, setPolises] = useState([]);
	const [polisForm, setPolisForm] = useState({
        TB_DATE_BEGIN: "",
        TB_DATE_END: "",
        TB_DATECONTROL:""
    })
	const [givingMethod, setGivingMethod] = useState(1)
	
	useEffect(()=>{
		ipcRenderer.send("get-payment", anketa.id);
		ipcRenderer.on("get-payment", load);
		ipcRenderer.send("get-transhes", anketa.id);
		ipcRenderer.on("get-transhes", initTransh);
		ipcRenderer.send("get-transports",anketa.id);
		ipcRenderer.on("get-transports", initTransport);
        ipcRenderer.send("get-polis");
        ipcRenderer.on("get-polis", initPolis);

		return ()=>{
			ipcRenderer.removeListener("get-payment", load);
			ipcRenderer.removeListener("get-transhes", initTransh);
			ipcRenderer.removeListener("get-transports", initTransport);
            ipcRenderer.removeListener("get-polis", initPolis);
		}
	},[]);

    const initPolis=(event, payload)=>{
        console.log(payload)
        payload=payload.map(item=>item.dataValues);
        setPolises(payload);
    }
	const initTransport=(event, payload)=>{
		setTransports(payload);
	}
	const load=(event, payload)=>{
		const oplatas=payload.oplatas.map(item=>item.dataValues);
		setOplatas(oplatas)
	}
	const initTransh=(event, payload)=>{
		payload=payload.map(item=>{return {...item.dataValues}});
        setTranshes(payload);
	}

	const changeHandler = e => {
     setPolisForm({ ...polisForm, [e.target.name]: e.target.value })
    }
    const save = e => {
        e.preventDefault()
    }
	console.log("data", oplatas, transports, transhes);
	return (
			<div className="form-main">
                <h4>Параметры</h4>
                <div className="input-group sparse">
                    <b>Выдача полиса:</b>
                    <input type="radio" disabled={transports.length === 1} checked={transports.length === 1} />
                    <label>один ко всем объектам</label>
                    <input type="radio" disabled={transports.length === 1}  checked={transports.length > 1} />
                    <label>каждому по одному</label>
                    <input type="radio" name="giving_method" value="1" onChange={() => setGivingMethod(1)} />
                    <label>один на вес срок</label>
                    <input type="radio" name="giving_method" value="2" onChange={() => setGivingMethod(2)} />
                    <label>на каждый транш новый</label>
                </div>
                <div className="input-group sparse my-4">
                    <label>Полис</label>
                    <select>
                        {
                            polises.map(item=>{
                                return (
                                    <option value={item.id}>
                                    {item.TB_SERY} {item.TB_NUMBER}
                                    </option>
                                    )
                            })
                        }
                    </select>
                    &nbsp;
                    {givingMethod === 2 && <>
                        <label>Платежи</label>
                        <select>
                            <option value="">Выберите</option>
                            {
                                oplatas.map((item, idx) => (
                                    <option value={item.id}>
                                        {`${item.OPL_DATA} (${item.OPL_SUMMA})`}
                                    </option>
                                    )
                                )
                            }
                        </select>
                    </>}
                </div>
                <form className="input-group sparse">
                    <span><b>Период действия:</b></span>
                    <label>c</label>
                    <input type="date" name="TB_DATE_BEGIN" value={polisForm.TB_DATE_BEGIN} onChange={changeHandler} />
                    <span>дня(ей)</span>&nbsp;
                    <label>по</label>
                    <input type="date" name="TB_DATE_END" value={polisForm.TB_DATE_END} onChange={changeHandler}/>
                    <span>г.</span>
                    <b>Дата выдачи:</b>
                    <label>c</label>
                    <input type="date" name="TB_DATECONTROL" value={polisForm.TB_DATECONTROL} onChange={changeHandler}/><br />
                    <button className="big-btn" onClick={e => save(e)}>Выдать полис</button>
                </form>
            </div>

		)
}

export default VidachaPolis;