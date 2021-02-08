import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { datediff } from "../../helpers/getDaysBetweenTwoDates";
import { contractCreate } from "../../redux/actions";
const { ipcRenderer } = window.require('electron');
const Dogovor = (props) => {
    const dispatch = useDispatch()
    const globalContracts = useSelector(state => state.contractReducer);
    const globalAnketa = useSelector(state => state.anketaReducer);
    const [premiyas, setPremiyas] = useState([
        {
            name: "BENTLEY TURBO R(2020|204735)",
            insuranceAmount: 0,
            premiyaPercent: 0,
            premiyaAmount: 0,
            franchise: false,
            franchiseCond: false,
            franchisePercent: 0,
            franchiseAmount: 0
        }
    ]);
    useEffect(() => {
        setPremiyas([...globalContracts])
    }, [globalContracts])
    useEffect(() => {
        ipcRenderer.on("contract-saved", save2)
    }, [])
    const save = () => {
        ipcRenderer.send("contract-create", premiyas)
    }
    const save2 = (event, data) => {
        dispatch(contractCreate([...data]))
        ipcRenderer.removeListener('contract-saved', save2);
    }
    const changePremiya = (e, index, prop) => {
        console.log(prop);
        let tempObj = [...premiyas];
        let target = parseFloat(e.target.value);

        switch (prop) {
            case 'insuranceAmount':
                tempObj[index]['insuranceAmount'] = target;
                tempObj[index]['premiyaAmount'] = tempObj[index]['premiyaPercent'] * target / 100;
                tempObj[index]['franchiseAmount'] = tempObj[index]['franchisePercent'] * target / 100;
                setPremiyas(tempObj)
                break;
            case 'premiyaPercent':
                tempObj[index]['premiyaPercent'] = target;
                tempObj[index]['premiyaAmount'] = tempObj[index]['insuranceAmount'] * target / 100;
                setPremiyas(tempObj);
                break;
            case 'franchisePercent':
                tempObj[index]['franchisePercent'] = target;
                tempObj[index]['franchiseAmount'] = target * tempObj[index]['insuranceAmount'];
                setPremiyas(tempObj);
                break;
            default:
                break;
        }
    }
    return (
        <div className="contract-form">
            <div className="contract-top">
                <h4><b>Номер договора</b></h4>
                <span>1021/2121</span>
                <h4>Дата подписания</h4>
                {/* <span>{globalAnketa.INS_DATE ?? ''}</span> */}
                <h4>Период страхования</h4>
                <div className="sparse">
                    <span>с</span>
                    {/* <span> {new Date(globalAnketa.INS_DATEF).toString() ?? ''}</span> */}
                    <span>по</span>
                    {/* <span>{new Date(globalAnketa.INS_DATET).toString()?? ''}г</span> */}
                </div>
                <h4>Срок действия:</h4>
                {/* <span>{globalAnketa.INS_DATEF ? datediff(globalAnketa.INS_DATEF, globalAnketa.INS_DATET) : ""} </span>дня(ей) */}
            </div>
            <div className="form-main">
                <div className="form-header">
                    <h4>Страховые покрытия</h4>
                    <div className="sparse">
                        {/*<button>Отмена</button>*/}
                        <button className="bg-skyblue" onClick={save}>Сохранить</button>
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
                            {premiyas.map((item, index) =>
                                <Fragment key={`premiya${index}`}>
                                    <tr key={"name" + index}>
                                        <td colSpan="9"><h5>{item.name}</h5></td>
                                    </tr>
                                    <tr key={"info" + index}>
                                        <td>Страхование транспортных средств, выставляемых в залог</td>
                                        <td>
                                            <input type="text"
                                                value={item.insuranceAmount}
                                                onChange={e => changePremiya(e, index, 'insuranceAmount')}
                                            />
                                        </td>
                                        <td>
                                            <input type="text"
                                                value={item.premiyaPercent}
                                                onChange={e => changePremiya(e, index, 'premiyaPercent')}
                                            />
                                        </td>
                                        <td>
                                            <input type="text" value={item.premiyaAmount} readOnly />
                                        </td>
                                        <td>
                                            <input value="1" disabled />
                                        </td>
                                        <td>
                                            <input type="checkbox"
                                                value={item.franchise}

                                            />
                                        </td>
                                        <td>
                                            <input type="checkbox"
                                                value={item.franchiseCond} />
                                        </td>
                                        <td>
                                            <input type="text"
                                                value={item.franchisePercent}
                                                onChange={e => changePremiya(e, index, 'franchisePercent')}
                                            />
                                        </td>
                                        <td>
                                            <input type="text" value={item.franchiseAmount} readOnly />
                                        </td>
                                    </tr>
                                </Fragment>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default Dogovor;