import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { MyTable, VidachaPolis } from '../../components/';
import countries from "../../constants/countries";
import currencies from "../../constants/currencies";
import { summation } from "../../helpers/summation";

const Polis = () => {
    const globalOplata = useSelector(state => state.oplataReducer);
    const globalAnketa = useSelector(state => state.anketaReducer);
    const globalContracts = useSelector(state => state.contractReducer);
    const globalTransports = useSelector(state => state.transportReducer);
    const globalTransh = useSelector(state => state.transhReducer);
    return (
        <div className="polis-main">
            <VidachaPolis/>
            <div className="row polis-info pt-3">
                <div className="col-6">
                    <label>Страхователь:</label>
                    <span>{globalAnketa.ISURER}</span><br />
                    <label>Географическая зона:</label>
                    <span>{globalAnketa.INS_COUNTRY ? countries[globalAnketa.INS_COUNTRY] : "Не задано"}</span><br />
                    <label>Договор страхования:</label>
                    <span>{globalAnketa.INS_NUM}</span><br />
                    <label>Общая страховая премия:</label>
                    <span>{summation([...globalContracts.map(item => item.premiyaAmount)])}</span><br />
                    <label>Валюта:</label>
                    <span>{globalAnketa.VAL_TYPE ? currencies[globalAnketa.VAL_TYPE] : ""}</span>
                </div>
                <div className="col-6">
                    <div className="input-group" style={{ overflowY: 'auto' }}>
                        <div className="form-row">
                            <label><b>Объект страхования:</b></label>
                            <input />
                            {/* <span className="d-block">строка (строки) 1-1 с 1</span> */}
                        </div>
                        <label><b>Платеж(и):</b></label>
                        <MyTable columns={
                            [
                                {
                                    title: 'Дата оплаты',
                                    dataIndex: 'OPL_DATA',
                                    filtered: false
                                },
                                {
                                    title: 'Оплата',
                                    dataIndex: 'OPL_SUMMA',
                                    filtered: false
                                },
                                {
                                    title: 'Тип оплаты',
                                    dataIndex: 'OPL_TYPE',
                                    filtered: false
                                },
                                {
                                    title: 'Пользователь',
                                    dataIndex: '',
                                    filtered: false
                                },
                                {
                                    title: 'Ком.%',
                                    dataIndex: '',
                                    filtered: false
                                },
                                {
                                    title: 'Комиссия',
                                    dataIndex: '',
                                    filtered: false
                                },
                                {
                                    title: 'Агент.согл.',
                                    dataIndex: '',
                                    filtered: false,
                                },
                                {
                                    title: '',
                                    dataIndex: '',
                                    filtered: false,
                                }

                            ]
                        }
                            data={globalOplata}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <h4>Страховые покрытия:</h4>
                    <table className="premiya-table">
                        <thead>
                            <tr>
                                <th>Вид страхования</th>
                                <th>Страховая сумма</th>
                                <th>Премия</th>
                                <th>Количество объектов</th>
                                <th>Франшиза сумма</th>
                            </tr>
                        </thead>
                        {/*globalPolis*/[{}].map((item, idx) => {
                            return <Fragment key={`polis${idx}`}>
                                <tr>
                                    <td colSpan="6"><b>Полис: GSS9999995 Период: с {item.TB_DATE_BEGIN}г. по {item.TB_DATE_END}г. Дата выдачи: {item.TB_DATECONTROL}</b></td>
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
                                    <td colSpan="6"><b>Итого:</b></td>
                                </tr>
                            </Fragment>
                        })}
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
                            <td colSpan="6"><b>Полис: GSS9999995 Период: с 14.01.2021г. по 29.05.2021г. Дата выдачи: 13.01.2021</b></td>
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