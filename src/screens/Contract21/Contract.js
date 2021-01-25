import React from "react";
const Dogovor = () => {
    
    return (
        <div className="contract-form">
            <div className="contract-top">
                <h4><b>Номер договора</b></h4>
                <span>1021/2121</span>
                <h4>Дата подписания</h4>
                <span>10.12.2020г</span>
                <h4>Период страхования</h4>
                <div className="sparse">
                    <span>с</span> 
                    <span> 10.12.2020</span>
                    <span>по</span>
                    <span>09.12.2020г</span>
                </div>
                <h4>Срок действия:</h4>
                <span>1095 </span>дня(ей)
            </div>
            <div className="form-main">
                <div className="form-header">
                    <h4>Страховые покрытия</h4>
                    <div className="sparse">
                        {/*<button>Отмена</button>*/}
                        <button className="bg-skyblue">Сохранить</button>
                    </div>
                </div>
                <div>
                    <table className="premiya-table">
                        <thead>
                            <tr>
                                <th>Вид страхования</th>
                                <th>Страховая сумма</th>
                                <th>Премия %</th>
                                <th>Премия</th>
                                <th>Количество объектов</th>
                                <th>Франшиза</th>
                                <th>Фр.условная</th>
                                <th>Франшиза %</th>
                                <th>Фр.сумма</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td colSpan="9"><h5>BENTLEY TURBO R(2020|204735)</h5></td>
                        </tr>
                        <tr>
                            <td>Страхование транспортных средств, выставляемых в залог</td>
                            <td>
                                <input type="number" />
                            </td>
                            <td>
                                <input type="number"/>
                            </td>
                            <td>
                                <input type="number"/>
                            </td>
                            <td>
                                <input value="1" disabled/>
                            </td>
                            <td>
                                <input type="checkbox" type="number" />
                            </td>
                            <td>
                                <input type="checkbox" type="number"/>
                            </td>
                            <td>
                                <input />
                            </td>
                            <td>
                                <input  />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>

    )
}
export default Dogovor;