import React, { useState } from "react";
import Anketa from "./Anketa";
const Form = () => {
    const [active, setActive] = useState(1)
    return (
        <div className="stepwizard">
            <ul>
            {[1, 2, 3, 4].map((item, idx) => (
                <button className={active == item ? 'active' : ''} key={idx}>item</button>
            ))}
            </ul>
            {active == 1 ? <Anketa /> : ''}
        </div>
    )
}
export default Form;