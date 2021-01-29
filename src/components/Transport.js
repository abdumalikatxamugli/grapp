import React, { useState } from "react";
import UnvisibleFormElements from "./UnvisibleFormElements";
const Transport = () => {
    const [transportForm, setTransportForm] = useState({
        "TB_ID": "",
        "TB_REGNUMBER": "",
        "TB_YEAR": "",
        "TB_KUZOV": "",
        "TB_SHASSI": "",
        "TB_DVIGATEL": "",
        "TB_MARKA": "",
        "TB_MODEL": "",
        "TB_TYPE": "",
        "TB_MOSCH": "",
        "TB_STOIMOST": "",
        "TB_COLOR": "",
        "TB_TEXPSERY": "",
        "TB_TEXPDATE": "",
        "TB_COMMENT": "",
        "TB_DEFEKT": "",
        "TB_DEFEKT_OPIS1": "",
        "TB_DEFEKT_OPIS2": "",
        "TB_DEFEKT_OPIS3": "",
        "TB_DEFEKT_OPIS4": "",
        "TB_DEFEKT_OPIS5": "",
        "TB_DEFEKT_OPIS6": "",
        "TB_DOP_KOL": "",
        "TB_SUMM_DOP_OBOR": "",
        "TB_SUMM_ARENDA": "",
        "TB_SIGNAL": "",
        "TB_DOP1_SPEC": "",
        "TB_DOP1_KOL": "",
        "TB_DOP1_SUM": "",
        "TB_DOP2_SPEC": "",
        "TB_DOP2_KOL": "",
        "TB_DOP2_SUM": "",
        "TB_DOP3_SPEC": "",
        "TB_DOP3_KOL": "",
        "TB_DOP3_SUM": "",
        "TB_DOP4_SPEC": "",
        "TB_DOP4_KOL": "",
        "TB_DOP4_SUM": "",
        "TB_DOP5_SPEC": "",
        "TB_DOP5_KOL": "",
        "TB_DOP5_SUM": "",
        "TB_DOP6_SPEC": "",
        "TB_DOP6_KOL": "",
        "TB_DOP6_SUM": "",
        "TB_DOP7_SPEC": "",
        "TB_DOP7_KOL": "",
        "TB_DOP7_SUM": "",
        "TB_DOP8_SPEC": "",
        "TB_DOP8_KOL": "",
        "TB_DOP8_SUM": "",
        "TB_DOP9_SPEC": "",
        "TB_DOP9_KOL": "",
        "TB_DOP9_SUM": "",
        "TB_DOP10_SPEC": "",
        "TB_DOP10_KOL": "",
        "TB_DOP10_SUM": "",
        "TB_LASTINSURER": "",
        "TB_UB_GOD1": "",
        "TB_UB_SUM1": "",
        "TB_UB_PRICHINA1": "",
        "TB_UB_GOD2": "",
        "TB_UB_SUM2": "",
        "TB_UB_PRICHINA2": "",
        "TB_UB_GOD3": "",
        "TB_UB_SUM3": "",
        "TB_UB_PRICHINA3": ""
    })
    const transportChanger = (e) => {
        setTransportForm({ ...transportForm, [e.target.name]: e.target.value })
    }
    return (
        <>

            <div className="transport-form hyper-form mt-20">
                <form>
                    <div className="ml--10">
                        <div className="input-group">
                            <div className="form-inline">
                                <label className="required">Владелец/Залогодатель/Лизингополучатель</label>
                                <input type="text" name="TB_ID" onChange={transportChanger} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label className="required">Гос.номер</label>
                                <input type="text" name="TB_REGNUMBER" onChange={transportChanger} />
                            </div>
                            <div className="form-inline">
                                <label className="required">Год выпуска</label>
                                <input type="text" name="TB_YEAR" onChange={transportChanger} />
                            </div>
                            <div className="form-inline">
                                <label>№ кузова</label>
                                <input type="text" name="TB_KUZOV" onChange={transportChanger} />
                            </div>
                            <div className="form-inline">
                                <label>Номер шасси</label>
                                <input type="text" name="TB_SHASSI" onChange={transportChanger} />
                            </div>
                            <div className="form-inline">
                                <label>№ двигателя</label>
                                <input type="text" name="TB_DVIGATEL" onChange={transportChanger} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label className="required">Марка</label>
                                <select name="TB_MARKA" onChange={transportChanger}>
                                    <option value="0">Выберите</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="form-inline">
                                <label>Модель </label>
                                <select name="TB_MODEL" onChange={transportChanger}>
                                    <option value="0">Выберите</option>
                                    <option value="1">1</option>
                                </select>
                                <input type="text" />
                            </div>
                            <div className="form-inline">
                                <label className="required">Вид транспорта</label>
                                <select name="TB_TYPE" onChange={transportChanger}>
                                    <option value="0">Выберите</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="form-inline">
                                <label>Объем </label>
                                <input type="text" name="TB_MOSCH" onChange={transportChanger} /><span>см³</span>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label>Стоимость ТС</label>
                                <input type="text" name="TB_STOIMOST" onChange={transportChanger} /><span>сум</span>
                            </div>
                            <div className="form-inline">
                                <label>Цвет кузова</label>
                                <input type="text" name="TB_COLOR" onChange={transportChanger} />
                            </div>
                            <div className="form-inline">
                                <label>№ тех. паспорта</label>
                                <input type="text" name="TB_TEXPSERY" onChange={transportChanger} />
                                <input type="text" name="TEXPNUMBER" onChange={transportChanger} />
                            </div>
                            <div className="form-inline">
                                <label>Дата выдачи</label>
                                <input type="date" name="TB_TEXPDATE" onChange={transportChanger} />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-block">
                                <label>Примечание</label>
                                <textarea name="TB_COMMENT" onChange={transportChanger}></textarea>
                            </div>
                        </div>
                    </div>
                    <h5>КОЭФФИЦЕНТЫ</h5>
                    <div className="ml--10">
                        <UnvisibleFormElements label="Дополнительно">
                            <div className="inline-children mb-20">
                                <label>Дефекты</label>
                                <input type="checkbox" name="TB_DEFEKT" onChange={transportChanger} />
                            </div>
                            <div className="input-cols">
                                <div>
                                    <span>1</span><input type="text" name="TB_DEFEKT_OPIS1" onChange={transportChanger} />
                                </div>
                                <div>
                                    <span>2</span><input type="text" name="TB_DEFEKT_OPIS2" onChange={transportChanger} />
                                </div>
                                <div>
                                    <span>3</span><input type="text" name="TB_DEFEKT_OPIS3" onChange={transportChanger} />
                                </div>
                                <div>
                                    <span>4</span><input type="text" name="TB_DEFEKT_OPIS4" onChange={transportChanger} />
                                </div>
                                <div>
                                    <span>5</span><input type="text" name="TB_DEFEKT_OPIS5" onChange={transportChanger} />
                                </div>
                                <div>
                                    <span>6</span><input type="text" name="TB_DEFEKT_OPIS6" onChange={transportChanger} />
                                </div>
                            </div>
                            <div className="input-group">
                                <div className="form-inline">
                                    <label>Количество доп. обор.</label>
                                    <input type="text" name="TB_DOP_KOL" onChange={transportChanger} />
                                </div>
                                <div className="form-inline">
                                    <label>Дополнительное оборудование</label>
                                    <input type="text" name="TB_SUMM_DOP_OBOR" onChange={transportChanger} />
                                </div>
                                <div className="form-inline">
                                    <label>Арендирование ТС</label>
                                    <input type="text" name="TB_SUMM_ARENDA" onChange={transportChanger} />
                                </div>
                                <div className="form-inline">
                                    <label>Противоугонная сигнализация</label>
                                    <input type="checkbox" name="TB_SIGNAL" onChange={transportChanger} />
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
                                            <input type="text" name="TB_DOP1_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP1_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP1_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Колонки задние</td>
                                        <td>
                                            <input type="text" name="TB_DOP2_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP2_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP2_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Колонки передние</td>
                                        <td>
                                            <input type="text" name="TB_DOP3_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP3_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP3_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Противоугонное устройство</td>
                                        <td>
                                            <input type="text" name="TB_DOP4_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP4_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP4_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>CD-changer</td>
                                        <td>
                                            <input type="text" name="TB_DOP5_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP5_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP5_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Саб-буфер</td>
                                        <td>
                                            <input type="text" name="TB_DOP6_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP6_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP6_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Усилитель</td>
                                        <td>
                                            <input type="text" name="TB_DOP7_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP7_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP7_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Диски</td>
                                        <td>
                                            <input type="text" name="TB_DOP8_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP8_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP8_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Шины</td>
                                        <td>
                                            <input type="text" name="TB_DOP9_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP9_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP9_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Иное</td>
                                        <td>
                                            <input type="text" name="TB_DOP10_SPEC" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP10_KOL" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_DOP10_SUM" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </UnvisibleFormElements>
                        <UnvisibleFormElements label="Предыдущее страхование">
                            <div className="input-group">
                                <div className="form-inline">
                                    <label>Страхователь</label>
                                    <select name="TB_LASTINSURER" onChange={transportChanger}>
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
                                            <input type="text" name="TB_UB_GOD1" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_UB_SUM1" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_UB_PRICHINA1" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="TB_UB_GOD2" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_UB_SUM2" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_UB_PRICHINA2" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" name="TB_UB_GOD3" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_UB_SUM3" onChange={transportChanger} />
                                        </td>
                                        <td>
                                            <input type="text" name="TB_UB_PRICHINA3" onChange={transportChanger} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </UnvisibleFormElements>
                    </div>
                    <div>
                        <button className="bg-skyblue btn-bg mv-20">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Transport;