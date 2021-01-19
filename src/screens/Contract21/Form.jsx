import React, { useState } from "react";
import Transport from "../../components/Transport";
import Anketa from "./Anketa";

const Form = () => {
    const [active, setActive] = useState(1)
    return (

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
                        <li className={active == item.id ? 'active' : ''} onClick={() => setActive(item.id)} key={idx}>
                            <span>{item.id}</span>
                            <strong>
                                {item.label}
                            </strong>
                        </li>
                    ))}
                </ul>
                {active == 1 && <Anketa />}
                {active == 2 && <Transport />}
            </div>

        </div>
    )
}
export default Form;