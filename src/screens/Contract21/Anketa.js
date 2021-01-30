import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ClientList, ClientTable, Client, Modal, Countries, Period } from '../../components/';
import CURRENCYCONDITIONS from '../../constants/currencyConditions';
import CURRENCIES from '../../constants/currencies';
import getMaxDate from '../../helpers/getMaxDate';
import getCurrentDate from '../../helpers/getCurrentDate';
import countries from "../../constants/countries";
import SimpleReactValidator from 'simple-react-validator';
import { useDispatch, useSelector } from 'react-redux';
import { anketaCreate } from "../../redux/actions";
import isEmpty from '../../helpers/objectHelpers';
const Anketa = forwardRef((props, ref) => {
    const globalAnketa = useSelector(state => state.anketaReducer);
    const dispatch = useDispatch()
    const [clientModalBeneficiaryState, setClientModalBeneficiaryState] = useState(false);
    const [clientModalInsurerState, setClientModalInsurerState] = useState(false);
    const [countryModalState, setCountryModalState] = useState(false);
    const [anketaForm, setAnketaForm] = useState({
        INS_DATE: getCurrentDate(),
        INS_DATEF: getCurrentDate(),
        INS_DATET: getCurrentDate(),
        INS_COUNTRY: '',
        VAL_TYPE: '',
        ISTOCHNIK_O: '',
        VAL_USLOVIYA: '',
        BENEFICIARY: undefined,
        INSURER: undefined
    });
    useEffect(() => {
        setAnketaForm({ ...anketaForm, ...globalAnketa })
    }, [globalAnketa])


    const validator = useRef(new SimpleReactValidator())
    const [, forceUpdate] = useState();
    useImperativeHandle(ref, () => ({
        showValidationMessages() {
            if (!validator.current.allValid()) {
                validator.current.showMessages();
                forceUpdate(1)
            }
        },
        submitNew() {
            dispatch(anketaCreate(anketaForm))
        }
    }));
    const anketaFormChanger = (e) => {
        // if (e.target.name === "BENEFICIARY") {
        //     setClientModalBeneficiaryState(false)
        // }
        // if (e.target.name === "INSURER") {
        //     setClientModalInsurerState(false)
        // }
        setAnketaForm({
            ...anketaForm,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
        if (anketaForm.INS_COUNTRY) {
            setCountryModalState(false)
        }
    }, [anketaForm.INS_COUNTRY, setCountryModalState])
    useEffect(() => {
        if (validator.current.allValid()) {
            props.givePermissionToStpep(2)
        }
    }, [anketaForm])

    return (
        <>
            <Modal show={clientModalBeneficiaryState} setShow={setClientModalBeneficiaryState}>
                <ClientList changedAttribute="BENEFICIARY">
                    <ClientTable
                        field='BENEFICIARY'
                        setShow={setClientModalBeneficiaryState}
                    />
                    <Client
                        field='BENEFICIARY'
                        setShow={setClientModalBeneficiaryState}
                    />
                </ClientList>
            </Modal>
            <Modal show={clientModalInsurerState} setShow={setClientModalInsurerState}>
                <ClientList changedAttribute="INSURER">
                    <ClientTable
                        field='INSURER'
                        setShow={setClientModalInsurerState}
                    />
                    <Client
                        field='INSURER'
                        setShow={setClientModalInsurerState}
                    />
                </ClientList>
            </Modal>
            <Modal show={countryModalState} setShow={setCountryModalState}>
                <Countries changedAttribute={"INS_COUNTRY"} changeHandler={anketaFormChanger} />
            </Modal>
            <div className="anketaCnt">
                <div className="row">
                    <div className="label">
                        <span>Дата заключения:</span>
                    </div>
                    <div className="input">
                        <input type="date" max={getMaxDate()} name="INS_DATE" value={anketaForm.INS_DATE} onChange={anketaFormChanger} />
                        {validator.current.message('INS_DATE', anketaForm.INS_DATE, 'required')}
                    </div>
                    <Period begin={anketaForm.INS_DATEF} end={anketaForm.INS_DATET} changeHandler={anketaFormChanger} />
                    <div className="label">
                        <span>Страхователь:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => setClientModalInsurerState(true)}>
                            {anketaForm.INSURER ?? 'Выберите...'}
                        </button>
                        {validator.current.message('INSURER', anketaForm.INSURER, 'required')}
                    </div>
                    <div className="label">
                        <span>Бенефициар:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => setClientModalBeneficiaryState(true)}>
                            {anketaForm.BENEFICIARY ?? 'Выберите...'}
                        </button>
                        {validator.current.message('BENEFICIARY', anketaForm.BENEFICIARY, 'required')}
                    </div>
                    <div className="label">
                        <span>Валютные условия:</span>
                    </div>
                    <div className="input">
                        <select name="VAL_USLOVIYA" value={anketaForm.VAL_USLOVIYA} onChange={anketaFormChanger}>
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
                        {validator.current.message('VAL_USLOVIYA', anketaForm.VAL_USLOVIYA, 'required')}
                    </div>
                    {anketaForm.VAL_USLOVIYA &&
                        <>
                            <div className="label">
                                <span>Валюта:</span>
                            </div>

                            <div className="input">
                                <select name="VAL_TYPE" value={anketaForm.VAL_TYPE} onChange={anketaFormChanger}>
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
                                {validator.current.message('VAL_TYPE', anketaForm.VAL_TYPE, 'required')}
                            </div>
                            <div className="label">
                                <span>Курс ЦБ:</span>
                            </div>
                            <div className="input">
                                <input type="number" name="VAL_KURS" value={anketaForm.VAL_KURS} onChange={anketaFormChanger} />
                                {validator.current.message('VAL_KURS', anketaForm.VAL_KURS, 'required')}
                            </div>
                        </>
                    }
                    <div className="label">
                        <span>Географическая зона:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => setCountryModalState(true)}>{countries[anketaForm.INS_COUNTRY]}</button>
                        {validator.current.message('INS_COUNTRY', anketaForm.INS_COUNTRY, 'required')}
                    </div>
                    <div className="label">
                        <span>Источник оплаты:</span>
                    </div>
                    <div className="input">
                        <input type="radio" name="ISTOCHNIK_O" onChange={anketaFormChanger} value="0" checked={anketaForm.ISTOCHNIK_O === '0' ? true : false} />
                        <label htmlFor="sobst">Собственные средства</label>
                        <input type="radio" name="ISTOCHNIK_O" onChange={anketaFormChanger} value="1" checked={anketaForm.ISTOCHNIK_O === '1' ? true : false} />
                        <label htmlFor="budget">Бюджетные средства</label>
                        {validator.current.message('ISTOCHNIK_O', anketaForm.ISTOCHNIK_O, 'required')}
                    </div>
                </div>
            </div>
        </>
    )
})


export default Anketa;