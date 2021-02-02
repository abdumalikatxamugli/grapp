import React, { useEffect, useRef, useState } from "react";
import { TopControls } from "../../components";
import Anketa from "./Anketa";
import Contract from "./Contract";
import Payment from "./Payment";
import TransportTable from "./TransportTable";
// import Transport from "../../components/Transport";
import Polis from "./Polis";
import "../../../node_modules/bootstrap-4-grid/css/grid.min.css";
const { ipcRenderer } = window.require('electron');

const Form = () => {
    const [active, setActive] = useState(1);
    const [navButtons, setNavButtons] = useState([
        { id: 1, label: 'Общие сведения', isAccessible: true },
        { id: 2, label: 'Объект', isAccessible: true },
        { id: 3, label: 'Договор страхования', isAccessible: true },
        { id: 4, label: 'Оплата', isAccessible: true },
        { id: 5, label: 'Полис', isAccessible: true }
    ])
    useEffect(()=>{
        ipcRenderer.on("error_occured",function(came){
            alert(JSON.stringify(came))
        })
    },[])
    const makeAccessible = (index) => {
        const tomodified = [...navButtons]
        const idx = tomodified.findIndex(item => item.id === index)
        tomodified[idx] = { ...tomodified[idx], isAccessible: true }
        setNavButtons([...tomodified])
    }
    const makeActive = (e, id) => {
        e.preventDefault()
        const idx = navButtons.findIndex(item => item.id === id)
        if (navButtons[idx].isAccessible) {
            setActive(id)
        } 
    }
    const activeChanger = (e, type) => {
        e.preventDefault()
        const activeId = parseInt(active)
        const idx = navButtons.findIndex(item => item.id === activeId)
        switch (type) {
            case 'increment':
                if (navButtons[idx + 1].isAccessible) {
                    setActive(activeId + 1)
                } 
                break;
            case 'decrement':
                if (navButtons[idx - 1].isAccessible) {
                    setActive(activeId - 1)
                }
                break;
            default:
                break;
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
                            <li className={active === item.id ? 'active' : ''} onClick={(e) => makeActive(e, item.id)} key={idx}>
                                <span>{item.id}</span>
                                <strong>
                                    {item.label}
                                </strong>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex justify-content-around mt-5 mb-5">
                        {active !== 1 && <button onClick={e => activeChanger(e, 'decrement')}>Отмена</button>}
                        {active !== 5 && <button onClick={e => activeChanger(e, 'increment')}>Далее</button>}
                    </div>
                    {active === 1 && <Anketa  givePermissionToStpep={makeAccessible} />}
                    {active === 2 && <TransportTable  givePermissionToStpep={makeAccessible} />}
                    {active === 3 && <Contract  givePermissionToStpep={makeAccessible} />}
                    {active === 4 && <Payment />}
                    {active === 5 && <Polis />}
                </div>

            </div>
        </>
    )
}
export default Form;