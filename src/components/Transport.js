import React from "react";
import UnvisibleFormElements from "./UnvisibleFormElements";
const Transport = () => {
    return (
        <>

        <div className="transport-form hyper-form mt-20">
            <form>
                
                <div className="ml--10">
                    <div className="input-group">
                        <div className="form-inline">
                            <label className="required">Владелец/Залогодатель/Лизингополучатель</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="form-inline">
                            <label className="required">Гос.номер</label>
                            <input type="text" />
                        </div>
                        <div className="form-inline">
                            <label className="required">Год выпуска</label>
                            <input type="text" />
                        </div>
                        <div className="form-inline">
                            <label>№ кузова</label>
                            <input type="text" />
                        </div>
                        <div className="form-inline">
                            <label>Номер шасси</label>
                            <input type="text" />
                        </div>
                        <div className="form-inline">
                            <label>№ двигателя</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="form-inline">
                            <label className="required">Марка </label>
                            <select>
                                <option value="0">Выберите</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="form-inline">
                            <label>Модель </label>
                            <select>
                                <option value="0">Выберите</option>
                                <option value="1">1</option>
                            </select>
                            <input type="text" />
                        </div>
                        <div className="form-inline">
                            <label className="required">Вид транспорта</label>
                            <select>
                                <option value="0">Выберите</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className="form-inline">
                            <label>Объем </label>
                            <input type="text" /><span>см³</span>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="form-inline">
                            <label>Стоимость ТС</label>
                            <input type="text" /><span>сум</span>
                        </div>
                        <div className="form-inline">
                            <label>Цвет кузова</label>
                            <input type="text" />
                        </div>
                        <div className="form-inline">
                            <label>№ тех. паспорта</label>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <div className="form-inline">
                            <label>Дата выдачи</label>
                            <input type="date" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="form-block">
                            <label>Примечание</label>
                            <textarea></textarea>
                        </div>
                    </div>
                </div>
                <h5>КОЭФФИЦЕНТЫ</h5>
                <div className="ml--10">
                    <UnvisibleFormElements label="Дополнительно">
                        <div className="inline-children mb-20">
                            <label>Дефекты</label>
                            <input type="checkbox"/>
                        </div>
                        <div className="input-cols">
                            
                            <div>
                                <span>1</span><input type="text" />
                            </div>
                            <div>
                                <span>2</span><input type="text" />
                            </div>
                            <div>
                                <span>3</span><input type="text" />
                            </div>
                            <div>
                                <span>4</span><input type="text" />
                            </div>
                            <div>
                                <span>5</span><input type="text" />
                            </div>
                            <div>
                                <span>6</span><input type="text" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label>Количество доп. обор.</label>
                                <input type="text" />
                            </div>
                            <div className="form-inline">
                                <label>Дополнительное оборудование</label>
                                <input type="text" />
                            </div>
                            <div className="form-inline">
                                <label>Арендирование ТС</label>
                                <input type="text" />
                            </div>
                            <div className="form-inline">
                                <label>Противоугонная сигнализация</label>
                                <input type="checkbox" />
                            </div>
                        </div>
                        <h5>Дополнительное оборудование</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Наименование</th>
                                    <th>Спецификация</th>
                                    <th>Кол-во</th>
                                    <th>Стоимость</th>
                                </tr>
                                <tr>
                                    <td>Автомагнитола</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Колонки задние</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Колонки передние</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Противоугонное устройство</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>CD-changer</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Саб-буфер</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Усилитель</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Диски</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Шины</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Иное</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </UnvisibleFormElements>
                    <UnvisibleFormElements label="Предыдущее страхование">
                        <div className="input-group">
                            <div className="form-inline">
                                <label>Страхователь</label>
                                <select>
                                    <option value="">Выберите</option>
                                </select>
                            </div>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Год</th>
                                    <th>Сумма убытков</th>
                                    <th>Основная причина</th>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </UnvisibleFormElements>
                </div>
            </form>
        </div>
        </>
    )
}
export default Transport;