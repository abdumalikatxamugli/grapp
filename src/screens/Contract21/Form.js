import React, { useState } from "react";
import {TopControls} from "../../components";
import Anketa from "./Anketa";
import Contract from "./Contract";
import Payment from "./Payment";
import TransportTable from "./TransportTable";
// import Transport from "../../components/Transport";
import Polis from "./Polis";
import "../../../node_modules/bootstrap-4-grid/css/grid.min.css";

const Form = () => {
    const [active, setActive] = useState(1)
    return (
        <>
        <div className="topbar">
            <TopControls search={false}/>
            <h1>21.Страхование транспортных средств, выставляемых в залог</h1>
        </div>
        <div className="form-main">
            <div className="stepwizard">
                <ul className="stepwizard-navigators">
                    {[
                        { id: 1, label: 'Общие сведения' },
                        { id: 2, label: 'Объект' },
                        { id: 3, label: 'Договор страхования' },
                        { id: 4, label: 'Оплата' },
                        { id: 5, label: 'Полис' }
                    ].map((item, idx) => (
                        <li className={active === item.id ? 'active' : ''} onClick={() => setActive(item.id)} key={idx}>
                            <span>{item.id}</span>
                            <strong>
                                {item.label}
                            </strong>
                        </li>
                    ))}
                </ul>
                {active === 1 && <Anketa />}
                {active === 2 && <TransportTable/>}
                {active === 3 && <Contract />}
                {active === 4 && <Payment/>}
                {active === 5 && <Polis />}
            </div>

        </div>
        </>
    )
}
export default Form;