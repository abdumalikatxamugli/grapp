import React, { useEffect, useRef, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import SimpleReactValidator from "simple-react-validator";
import { transportCreate } from "../redux/actions";
import { contractAdd } from "../redux/actions/contract";
import UnvisibleFormElements from "./UnvisibleFormElements";
import { Modal, ClientTable, Client, ClientList } from './index';
const { ipcRenderer } = window.require('electron');

const Transport = (props) => {
    const dispatch = useDispatch();

    const anketa=useSelector(state=>state.anketaReducer);
    const [zagoladatelShowState, setZagoladatelShowState] = useState(false)
    const [transportForm, setTransportForm] = useState({});
    const validator = useRef(new SimpleReactValidator())
    const [, forceUpdate] = useState();
    useEffect(() => {
        ipcRenderer.on("transport-saved", save2);
        ipcRenderer.on("remove-client",remove2);
        return ()=>{
            ipcRenderer.removeListener('transport-saved', save2);
            ipcRenderer.removeListener("remove-client",remove2);
            props.setBlock(false);
        }
    }, [])

    const transportChanger = (e) => {
        setTransportForm({ ...transportForm, [e.target.name]: e.target.value })
    }
    const setZ = (name, id) => {
        setTransportForm({ ...transportForm, ZALOGADATEL: name,  ZALOGADATEL_ID: id });
        props.setBlock(true);
    }
    const save = (e) => {
        e.preventDefault()
        // if (validator.current.allValid()) {
        ipcRenderer.send("transport-create", {...transportForm, ANKETA_ID:anketa.id})
        // } else {
        // validator.current.showMessages();
        // forceUpdate(1)
        // }
    }
    const save2 = (event, came) => {
        props.addTransport()
        dispatch(transportCreate({...came, voditels:[]}))
     
    }
    const remove=(id, role)=>{
        ipcRenderer.send('remove-client',id, role);
        props.setBlock(false);
    }
    const remove2=(event, id, role)=>{
        if(role==='ZALOGADATEL'){
            setTransportForm({ZALOGADATEL:null, ZALOGADATEL_ID:null});
        }
    };
    return (
        <>
            <div className="transport-form hyper-form mt-20">
                <Modal show={zagoladatelShowState} setShow={setZagoladatelShowState}>
                    <ClientList changedAttribute="ZALOGADATEL">
                        <ClientTable
                            action={setZ}
                            setShow={setZagoladatelShowState}
                            restricted={null}
                        />
                        <Client
                            action={setZ}
                            setShow={setZagoladatelShowState}
                        />
                    </ClientList>
                </Modal>
                <form>
                    <div className="ml--10">
                        <div className="input-group">
                            <div className="form-inline">
                                <label className="required">Владелец/Залогодатель/Лизингополучатель</label>
                                <button type="button" onClick={e => transportForm.ZALOGADATEL??setZagoladatelShowState(true)}>
                                    {transportForm.ZALOGADATEL ?? 'Залогодатель'}
                                </button>
                                {
                                    transportForm.ZALOGADATEL&&
                                    <button
                                        type="button"
                                        className="remove"
                                        onClick={()=>remove(transportForm.ZALOGADATEL_ID, "ZALOGADATEL")}
                                    >
                                        remove
                                    </button>
                                }
                                {validator.current.message('ZALOGADATEL_ID', transportForm.ZALOGADATEL_ID, 'required')}
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label className="required">Гос.номер</label>
                                <input type="text" name="TB_REGNUMBER" onChange={transportChanger} />
                                {validator.current.message('TB_REGNUMBER', transportForm.TB_REGNUMBER, 'required')}
                            </div>
                            <div className="form-inline">
                                <label className="required">Год выпуска</label>
                                <input type="text" name="TB_YEAR" onChange={transportChanger} />
                                {validator.current.message('TB_YEAR', transportForm.TB_YEAR, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>№ кузова</label>
                                <input type="text" name="TB_KUZOV" onChange={transportChanger} />
                                {validator.current.message('TB_KUZOV', transportForm.TB_KUZOV, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>Номер шасси</label>
                                <input type="text" name="TB_SHASSI" onChange={transportChanger} />
                                {validator.current.message('TB_SHASSI', transportForm.TB_SHASSI, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>№ двигателя</label>
                                <input type="text" name="TB_DVIGATEL" onChange={transportChanger} />
                                {validator.current.message('TB_DVIGATEL', transportForm.TB_DVIGATEL, 'required')}
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label className="required">Марка</label>
                                <select name="TB_MARKA" onChange={transportChanger}>
                                    <option value="0">Выберите</option>
                                    <option value="1">1</option>
                                </select>
                                {validator.current.message('TB_MARKA', transportForm.TB_MARKA, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>Модель </label>
                                <select name="TB_MODEL" onChange={transportChanger}>
                                    <option value="0">Выберите</option>
                                    <option value="1">1</option>
                                </select>
                                <input type="text" name="TB_VMODEL" onChange={transportChanger} />
                                {validator.current.message('TB_MODEL', transportForm.TB_MODEL, 'required')}
                                {validator.current.message('TB_VMODEL', transportForm.TB_VMODEL, 'required')}
                            </div>
                            <div className="form-inline">
                                <label className="required">Вид транспорта</label>
                                <select name="TB_TYPE" onChange={transportChanger}>
                                    <option value="0">Выберите</option>
                                    <option value="1">1</option>
                                </select>
                                {validator.current.message('TB_TYPE', transportForm.TB_TYPE, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>Объем </label>
                                <input type="text" name="TB_MOSCH" onChange={transportChanger} /><span>см³</span>
                                {validator.current.message('TB_MOSCH', transportForm.TB_MOSCH, 'required')}
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label>Стоимость ТС</label>
                                <input type="text" name="TB_STOIMOST" onChange={transportChanger} /><span>сум</span>
                                {validator.current.message('TB_STOIMOST', transportForm.TB_STOIMOST, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>Цвет кузова</label>
                                <input type="text" name="TB_COLOR" onChange={transportChanger} />
                                {validator.current.message('TB_COLOR', transportForm.TB_COLOR, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>№ тех. паспорта</label>
                                <input type="text" name="TB_TEXPSERY" onChange={transportChanger} />
                                <input type="text" name="TEXPNUMBER" onChange={transportChanger} />
                                {validator.current.message('TB_TEXPSERY', transportForm.TB_TEXPSERY, 'required')}
                                {validator.current.message('TEXPNUMBER', transportForm.TEXPNUMBER, 'required')}
                            </div>
                            <div className="form-inline">
                                <label>Дата выдачи</label>
                                <input type="date" name="TB_TEXPDATE" onChange={transportChanger} />
                                {validator.current.message('TB_TEXPDATE', transportForm.TB_TEXPDATE, 'required')}
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-block">
                                <label>Примечание</label>
                                <textarea name="TB_COMMENT" onChange={transportChanger}></textarea>
                                {validator.current.message('TB_COMMENT', transportForm.TB_COMMENT, 'required')}
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
                        <button className="bg-skyblue btn-bg mv-20" onClick={save}>Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Transport;