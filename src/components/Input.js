import React from "react";
const Input = (props) => {
    const blurred = (e) => {
        if (e.currentTarget.value != "") {
            e.currentTarget.classList.addClass('not-empty');
        } else {
            e.currentTarget.classList.remove('not-empty');
        }
    }
    return (
        <div class="styled-input">
            <input {...props} onBlur={e => blurred(e)} />
            <label>{props.label}</label>
            <span></span>
        </div>
    )
}
export default Input;
