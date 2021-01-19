import React from "react";
const Input = (props) => {
    const blurred = (e) => {
        if (e.currentTarget.value != "") {
            e.currentTarget.classList.add('not-empty');
        } else {
            e.currentTarget.classList.remove('not-empty');
        }
    }
    return (
        <div className="styled-input">
            <input className={props.className?`mrdn ${props.className}`:'mrdn'} {...props} onBlur={e => blurred(e)} />
            <label>{props.label}</label>
            <span></span>
        </div>
    )
}
export default Input;
