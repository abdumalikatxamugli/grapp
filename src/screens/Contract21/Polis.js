import React from "react";
const Polis = () => {
    // const 
    return (
        <div className="polis-main">
            <div className="form-main">
                <h4>Параметры</h4>
                <div className="input-group sparse">
                    <b>Выдача полиса:</b>
                    <input type="radio" disabled />
                    <label>один ко всем объектам</label>
                    <input type="radio" disabled />
                    <label>каждому по одному</label>
                    <input type="radio" disabled />
                    <label>один на вес срок</label>
                    <input type="radio" disabled />
                    <label>на каждый транш новый</label>
                </div>
                <div className="input-group sparse">
                    <label>Полис</label>
                    <select>
                        <option>Выберите</option>
                    </select>
                    &nbsp;
                    <label>Платежи</label>
                    <select>
                        <option>Выберите</option>
                    </select>
                </div>
                <div className="input-group sparse">
                    <span><b>Период действия:</b></span>
                    <label>c</label>
                    <input type="date" />
                    <span>дня(ей)</span>&nbsp;
                    <label>по</label>
                    <input type="date" />
                    <span>г.</span>
                    <b>Дата выдачи:</b>
                    <label>c</label>
                    <input type="date" /><br />
                    <button className="big-btn">Выдать полис</button>
                </div>
            </div>
            <div className="row polis-info pt-3">
                <div className="col-6">
                    <label>Страхователь:</label>
                    <span>ХАМКОРБАНК АКЦ.ТИЖ.БАНК</span><br />
                    <label>Географическая зона:</label>
                    <span>РЕСПУБЛИКА УЗБЕКИСТАН</span><br />
                    <label>Договор страхования:</label>
                    <span>10/21/1000 от13.01.2021г.</span><br />
                    <label>Общая страховая премия:</label>
                    <span>14 400,01</span><br />
                    <label>Валюта:</label>
                    <span>Узбекский сум</span>
                </div>
                <div className="col-6">
                    <div className="input-group">
                        <div className="form-row">
                            <label><b>Объект страхования:</b></label>
                            <input />
                            {/* <span className="d-block">строка (строки) 1-1 с 1</span> */}
                        </div>
                        <label><b>Платеж(и):</b></label>
                        <table>
                            <tr>
                                <th>Дата</th>
                                <th>Сумма</th>
                            </tr>
                            <tr>
                                <td>13.01.2021</td>
                                <td>7 200,00</td>
                            </tr>
                            <tr>
                                <td>13.01.2021</td>
                                <td>7 200,00</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="col-12">
                    <h4>Страховые покрытия:</h4>
                    <table class="premiya-table">
                        <thead>
                            <tr>
                                <th>Вид страхования</th>
                                <th>Страховая сумма</th>
                                <th>Премия</th>
                                <th>Количество объектов</th>
                                <th>Франшиза сумма</th>
                            </tr>
                        </thead>
                        <tr>
                            <td colspan="6"><b>Полис: GSS9999995 Период: с 14.01.2021г. по 29.05.2021г. Дата выдачи: 13.01.2021</b></td>
                        </tr>
                        <tr>
                            <td> Гаровга қўйиладиган транспорт воситаларини суғурта қилиш</td>
                            <td>
                               500 000 000,00
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                7 500 000,00
                            </td>
                            <td>
                                5 000 000,00
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Оплата сумма:
                            </td>
                            <td>
                               500 000 000,00
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                7 500 000,00
                            </td>
                            <td>
                                5 000 000,00
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Полис сумма:
                            </td>
                            <td>
                               500 000 000,00
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                7 500 000,00
                            </td>
                            <td>
                                5 000 000,00
                            </td>
                        </tr>
                        <tr>
                            <td colspan="6"><b>Итого:</b></td>
                        </tr>
                    </table>
                    {/* <table class="premiya-table mt-5">
                        <thead>
                            <tr>
                                <th>Оплата</th>
                                <th>Вид страхования</th>
                                <th>Страховая сумма</th>
                                <th>Премия</th>
                                <th>Количество объектов</th>
                                <th>Франшиза сумма</th>
                            </tr>
                        </thead>
                        <tr>
                            <td colspan="6"><b>Полис: GSS9999995 Период: с 14.01.2021г. по 29.05.2021г. Дата выдачи: 13.01.2021</b></td>
                        </tr>
                        <tr>
                            <td>13.01.2021 (7 200,00)</td>
                            <td>
                                Гаровга қўйиладиган транспорт воситаларини суғурта қилиш
                            </td>
                            <td>
                                120 000,00
                            </td>
                            <td>
                                7 200,00
                            </td>
                            <td>
                                1
                            </td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>
                                Оплата сумма:
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                7 200,00
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Полис сумма:
                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>

                            </td>
                            <td>
                                7 200,00
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Итого:
                            </td>
                            <td>
                                Гаровга қўйиладиган транспорт воситаларини суғурта қилиш
                            </td>
                            <td>
                                Гаровга қўйиладиган транспорт воситаларини суғурта қилиш
                            </td>
                            <td></td>
                            <td>14 400,00</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table> */}

                </div>
            </div>
        </div>
    )
}
export default Polis;