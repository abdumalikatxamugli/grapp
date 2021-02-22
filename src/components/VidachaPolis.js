import React, {useEffect, useState} from "react"
import {useSelector} from 'react-redux';
const { ipcRenderer } = window.require('electron');

const VidachaPolis=(props)=>{
	const anketa=useSelector(state=>state.anketaReducer);
	const [oplatas, setOplatas]=useState([]);
	const [transhes, setTranshes] = useState([]);
	const [transports, setTransports] = useState([]);
    const [polises, setPolises] = useState([]);
    const [whole, setWhole] = useState(false);
    const [all, setAll] = useState(false);
    const [,forceUpdate]=useState();
    const [polisForm, setPolisForm] = useState({
        id:null,
        TB_DATE_BEGIN: "",
        TB_DATE_END: "",
        TB_DATECONTROL:"",
        OPLATA_ID: null,
        AVTO_ID: null,
        TRANSCH_ID: null        
    });
    
	const [givingMethod, setGivingMethod] = useState(1)
	
	useEffect(()=>{
		ipcRenderer.send("get-paymentP", anketa.id);
		ipcRenderer.on("get-paymentP", load);
		ipcRenderer.send("get-transhesP", anketa.id);
		ipcRenderer.on("get-transhesP", initTransh);
		ipcRenderer.send("get-transports",anketa.id);
		ipcRenderer.on("get-transports", initTransport);
        ipcRenderer.send("get-polis");
        ipcRenderer.on("get-polis", initPolis);
        ipcRenderer.on("polis-save", saved);

		return ()=>{
			ipcRenderer.removeListener("get-paymentP", load);
			ipcRenderer.removeListener("get-transhesP", initTransh);
			ipcRenderer.removeListener("get-transports", initTransport);
            ipcRenderer.removeListener("get-polis", initPolis);
            ipcRenderer.removeListener("polis-save", saved);
		}
	},[]);
    useEffect(()=>{
        if(!all){
            setPolisForm({...polisForm, AVTO_ID: null});
        }
        if(!whole){
            setPolisForm({...polisForm, TRANSCH_ID: null});
        }
    },[all, whole]);
    useEffect(()=>{
        if(transports.length===1){
            setAll(true);
        }
        if(transhes.length===1){
            setWhole(true);
        }
    },[transports, transhes])
    const initPolis=(event, payload)=>{
        payload=payload.map(item=>item.dataValues);
        setPolises(payload);
    }
	const initTransport=(event, payload)=>{
		setTransports(payload);
	}
	const load=(event, payload)=>{
		setOplatas(payload.oplatas)
	}
	const initTransh=(event, payload)=>{
       
	    setTranshes(payload);
	}

	const changeHandler = e => {
     setPolisForm({ ...polisForm, [e.target.name]: e.target.value })
    }
    const save = () => {
        if(!polisForm.id){
            alert("Пожалуйста выберите POLIS");
            return;
        }
        if(!polisForm.OPLATA_ID){
            alert("Пожалуйста выберите OPLATA");
            return;
        }
        if(!polisForm.AVTO_ID && !all){
            alert("Пожалуйста выберите AVTO");
            return;
        }
        if(!polisForm.TRANSCH_ID && !whole){
            alert("Пожалуйста выберите TRANSH");
            return;
        }
        
        setPolisForm({...polisForm, ANKETA_ID: anketa.id});
        
        ipcRenderer.send("polis-save", polisForm);

    }
    const saved=(event)=>{
        alert("Полис сохранен.");
        forceUpdate(1);
    }
	return (
			<div className="form-main">
                <h4>Параметры</h4>
                <div className="input-group sparse">
                    <b>Выдача полиса:</b>

                    <input type="radio" 
                           disabled={transports.length === 1} 
                           checked={all} 
                           onChange={e=>setAll(true)}
                    />
                    <label>один ко всем объектам</label>
                    <input type="radio" 
                           disabled={transports.length === 1}  
                           checked={!all} 
                           onChange={e=>setAll(false)}
                    />
                    <label>каждому по одному</label>

                    <input type="radio" 
                           value={true} 
                           disabled={transhes.length === 0} 
                           onChange={() => setWhole(true)} 
                           checked={whole}
                    />
                    <label>один на вес срок</label>
                    <input type="radio" 
                            disabled={transhes.length === 0} 
                            value={false} 
                            onChange={() => setWhole(false)} 
                            checked={!whole}
                    />
                    <label>на каждый транш новый</label>
                
                </div>
                <div className="input-group sparse my-4">
                    <label>Полис</label>
                    <select name="id" onChange={changeHandler} value={polisForm.id}>
                        <option value={null}>Choose</option>
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
                    <label>Платежи</label>
                    <select name="OPLATA_ID" onChange={changeHandler} value={polisForm.OPLATA_ID}>
                        <option value={null}>Выберите</option>
                        {
                            oplatas.map((item, idx) => (
                               <option value={item.id}>
                                    {`${item.OPL_DATA} (${item.OPL_SUMMA})`}
                                </option>
                                )
                            )
                        }
                        </select>
                   
                </div>
                <div className="input-group sparse my-4">
                    {!all&&
                    <>
                    <label>AVTO</label>
                    <select name="AVTO_ID" onChange={changeHandler} value={polisForm.AVTO_ID}>
                        <option value={null}>Choose</option>
                        {
                            transports.map(item=>{
                                return (
                                    <option value={item.id}>
                                        {item.TB_REGNUMBER}
                                    </option>
                                    )
                            })
                        }
                    </select>
                    </>
                    }
                    {!whole&&
                    <>
                    <label>TRANSCH</label>
                    <select name="TRANSCH_ID" onChange={changeHandler} value={polisForm.TRANSCH_ID}>
                        <option value={null}>Choose</option>
                        {
                            transhes.map(item=>{
                                return (
                                    <option value={item.id}>
                                        {item.date} - {item.amount}
                                    </option>
                                    )
                            })
                        }
                    </select>
                    </>
                    }
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
                    <button type="button" className="big-btn" onClick={save}>Выдать полис</button>
                </form>
            </div>

		)
}

export default VidachaPolis;