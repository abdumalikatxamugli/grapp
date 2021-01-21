import React from "react";
const Polis = () => {
    return (
        <div className="polis-main">
            <div className="form-main">
                <h4>Параметры</h4>
                <div className="input-group sparse">
                    <b>Выдача полиса:</b>
                    <input type="checkbox" />
                    <label>один ко всем объектам</label>
                </div>
            </div>
        </div>
    )
}
export default Polis;