import React, { useEffect, useState } from "react";
import { ClientList, Modal, Countries, Period } from '../../components/';
import CURRENCYCONDITIONS from '../../constants/currencyConditions';
import CURRENCIES from '../../constants/currencies';
import getMaxDate from '../../helpers/getMaxDate';
import getCurrentDate from '../../helpers/getCurrentDate';
import countries from "../../constants/countries";
import SimpleReactValidator from 'simple-react-validator';
const Anketa = () => {
    const [clientModalState, setClientModalState] = useState(false);
    const [countryModalState, setCountryModalState] = useState(false);
    const [anketaForm, setAnketaForm] = useState({
        INS_DATE: getCurrentDate(),
        INS_DATEF: getCurrentDate(),
        INS_DATET: getCurrentDate(),
        INS_COUNTRY: 0,
        VAL_TYPE: "",
        ISTOCHNIK_O: "",
        VAL_USLOVIYA: ""
    })
    const validator = new SimpleReactValidator()
    useEffect(() => { console.log(validator)}, [])
    const anketaFormChanger = (e) => {
        setAnketaForm({
            ...anketaForm,
            [e.target.name]: e.target.value
        })
    }
    useEffect(()=>{
        if(anketaForm.INS_COUNTRY){
            setCountryModalState(!countryModalState)
        }
    },[anketaForm.INS_COUNTRY])
    
    return (
        <>
            <Modal show={clientModalState} setShow={setClientModalState}>
                <ClientList />
            </Modal>
            <Modal show={countryModalState} setShow={setCountryModalState}>
                <Countries changedAttribute={"INS_COUNTRY"} changeHandler={anketaFormChanger} />
            </Modal>
            <div className="anketaCnt">
                <div className="row">
                    {JSON.stringify(anketaForm)} 
                    <div className="label">
                        <span>Дата заключения:</span>
                    </div>
                    <div className="input">
                        <input type="date" max={getMaxDate()} name="INS_DATE" onChange={anketaFormChanger} />
                        {validator.message('INS_DATE', anketaForm.INS_DATE, 'required|alpha')}
                    </div>
                    <Period changeHandler={anketaFormChanger} />
                    <div className="label">
                        <span>Страхователь:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => setClientModalState(true)}>Выберите...</button>
                    </div>
                    <div className="label">
                        <span>Бенефициар:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => setClientModalState(true)}>Выберите...</button>
                    </div>
                    <div className="label">
                        <span>Валютные условия:</span>
                    </div>
                    <div className="input">
                        <select name="VAL_USLOVIYA" onChange={anketaFormChanger}>
                            <option value="">Выберите</option>
                            {
                                CURRENCYCONDITIONS.map((item, index) => {
                                    return (
                                        <option key={index} value={index} title={item}>
                                            {item.slice(0, 100)} ...
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {anketaForm.VAL_USLOVIYA &&
                        <>
                            <div className="label">
                                <span>Валюта:</span>
                            </div>
                            <div className="input">
                                <select name="VAL_TYPE" id="" onChange={anketaFormChanger}>
                                    <option value="">Выберите</option>
                                    {
                                        CURRENCIES.map((item, index) => {
                                            return (
                                                <option key={index} value={index} title={item}>
                                                    {item.slice(0, 100)} ...
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="label">
                                <span>Курс ЦБ:</span>
                            </div>
                            <div className="input">
                                <input type="number" name="VAL_KURS" onChange={anketaFormChanger} />
                            </div>
                        </>
                    }
                    <div className="label">
                        <span>Географическая зона:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => setCountryModalState(true)}>{countries[anketaForm.INS_COUNTRY]}</button>
                    </div>
                    <div className="label">
                        <span>Источник оплаты:</span>
                    </div>
                    <div className="input">
                        <input type="radio" name="ISTOCHNIK_O" onChange={anketaFormChanger} value="0" />
                        <label htmlFor="sobst">Собственные средства</label>
                        <input type="radio" name="ISTOCHNIK_O" onChange={anketaFormChanger} value="1" />
                        <label htmlFor="budget">Бюджетные средства</label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Anketa;