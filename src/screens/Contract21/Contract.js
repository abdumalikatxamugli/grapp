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
                с &n <span> 10.12.2020</span> по <span>09.12.2020г</span>
                <h4>Срок действия:</h4>
                <span>1095 </span>дня(ей)
            </div>
            <div className="form-main">
                <div className="form-header">
                    <h4>Страховые покрытия</h4>
                    <div className="sparse">
                        <button>Отмена</button>
                        <button>Сохранить</button>
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
                            <td colSpan="9"><b>BENTLEY TURBO R(2020|204735)</b></td>
                        </tr>
                        <tr>
                            <td>Страхование транспортных средств, выставляемых в залог</td>
                            <td>
                                <input value="500 000 000.00" />
                            </td>
                            <td>
                                <input value="0,50" />
                            </td>
                            <td>
                                <input value="7 500 000.00" />
                            </td>
                            <td>
                                <input value="1" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <input value="1,00" />
                            </td>
                            <td>
                                <input value="5 000 000,00" />
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