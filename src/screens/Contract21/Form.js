import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { TopControls } from "../../components";
import Anketa from "./Anketa";
import Contract from "./Contract";
import Payment from "./Payment";
import TransportTable from "./TransportTable";
import Polis from "./Polis";
import "../../../node_modules/bootstrap-4-grid/css/grid.min.css";
const { ipcRenderer } = window.require('electron');

const Form = () => {

    const anketa=useSelector(state=>state.anketaReducer);
    useEffect(()=>{
        ipcRenderer.on("error_occured",function(came,error){
            alert(JSON.stringify(error))
        });
        return ()=>{
            ipcRenderer.removeAllListeners('error_occured')
        }
    },[]);
    

    const [active, setActive] = useState(0);
    const [navButtons, setNavButtons] = useState([
        {  label: 'Общие сведения', isAccessible: true },
        {  label: 'Объект', isAccessible: true },
        {  label: 'Договор страхования', isAccessible: true },
        {  label: 'Оплата', isAccessible: true },
        {  label: 'Полис', isAccessible: true }
    ]);
   
    const permit = (id) => {
        const modified = [...navButtons]
        modified[id].isAccessible =  true ;
        setNavButtons([...modified])
    }
    const activate = (id) => {
        if (navButtons[id].isAccessible) {
            setActive(id)
        } 
    }
    

    return (
        <>
            <div className="topbar">
                <TopControls search={false} />
                <h1> 21. Страхование транспортных средств, выставляемых в залог</h1>
            </div>
            <div className="form-main">
                <div className="stepwizard">
                    <ul className="stepwizard-navigators">
                        {navButtons.map((item, idx) => (
                            <li className={active === idx ? 'active' : ''} onClick={() => activate(idx)} key={idx}>
                                <span>{idx+1}</span>
                                <strong>
                                    {item.label}
                                </strong>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-around mt-5 mb-5">
                        {active !== 0 && <button onClick={() => activate(active-1 )}>Назад</button>}
                        {active !== 1 && <button onClick={() => activate(active+1)}>Далее</button>}
                    </div>
                    {active === 0 && <Anketa  permit={permit} />}
                    {active === 1 && <TransportTable  permit={permit} anketa_id={anketa.id}/>}
                    {active === 2 && <Contract  permit={permit} />}
                    {active === 3 && <Payment  permit={permit} />}
                    {active === 4 && <Polis />}
                </div>

            </div>
        </>
    )
}
export default Form;