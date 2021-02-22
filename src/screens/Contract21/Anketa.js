import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { anketaCreate } from "../../redux/actions";
import SimpleReactValidator from 'simple-react-validator';
import { ClientList, 
         ClientTable, 
         Client, 
         Modal, 
         Countries, 
         Period 
     } from '../../components/';
import CURRENCYCONDITIONS from '../../constants/currencyConditions';
import CURRENCIES from '../../constants/currencies';
import getMaxDate from '../../helpers/getMaxDate';
import getCurrentDate from '../../helpers/getCurrentDate';

const { ipcRenderer } = window.require('electron');
const Anketa = (props, ref) => {
    const dispatch = useDispatch()
    const globalAnketa = useSelector(state => state.anketaReducer);

    const [clientModalBeneficiaryState, setClientModalBeneficiaryState] = useState(false);
    const [clientModalInsurerState, setClientModalInsurerState] = useState(false);
    const [countryModalState, setCountryModalState] = useState(false);

    const [anketaForm, setAnketaForm] = useState({
        INS_DATE: getCurrentDate(),
        INS_DATEF: getCurrentDate(),
        INS_DATET: getCurrentDate(),
    });

    useEffect(() => {
        ipcRenderer.on("anketa_saved",save2);
        ipcRenderer.on("remove-client",remove2);
        return ()=>{
            ipcRenderer.removeListener("anketa_saved",save2);
            ipcRenderer.removeListener("remove-client",remove2);
        }
    }, ["init"])

    useEffect(() => {
        setAnketaForm({ ...anketaForm, ...globalAnketa })
    }, [globalAnketa])

    useEffect(() => {
        if (validator.current.allValid()) {
            props.permit(2)
        }
    }, [anketaForm])

    const validator = useRef(new SimpleReactValidator())

    const changeAnketa = (e) => {
        setAnketaForm({
            ...anketaForm,
            [e.target.name]: e.target.value
        });
    }

    const save = () => {
        ipcRenderer.send("anketa_save", anketaForm)
    }
    const save2 = (event, args) => {
        dispatch(anketaCreate(args))
        alert('ANKETA сохранен.');
    }

    const setB=(name,id, archive_id)=>{
        if(id===anketaForm.INSURANT_ID){
            alert("BENEFICIAR can not be same as INSURANT");
            return;
        }
        dispatch(anketaCreate({BENEFICIARY:name, BENEFICIARY_ID:id, BENEFICIARY_ARCHIVE: archive_id}));
    }
    const setI=(name,id, archive_id)=>{
         if(id===anketaForm.BENEFICIARY_ID){
            alert("INSURANT can not be same as BENEFICIAR");
            return;
         }
         dispatch(anketaCreate({INSURANT:name,INSURANT_ID:id, INSURANT_ARCHIVE:archive_id}));
    }
    const setC=(name)=>{
        dispatch(anketaCreate({INS_COUNTRY:name}));
    }
    const remove=(id, role)=>{
        ipcRenderer.send('remove-client',id, role)
    }

    const remove2=(event, id, role)=>{
        if(role==='BENEFICIARY'){
            dispatch(anketaCreate({BENEFICIARY:null, BENEFICIARY_ID:null}));
        }
        if(role==='INSURANT'){
            dispatch(anketaCreate({INSURANT:null, INSURANT_ID:null}));
        }
    };
    
    return (
        <>
            <Modal show={clientModalBeneficiaryState} setShow={setClientModalBeneficiaryState}>
                <ClientList changedAttribute="BENEFICIARY">
                    <ClientTable
                        setShow={setClientModalBeneficiaryState}
                        action={setB}
                        restricted={anketaForm.INSURANT_ARCHIVE??null}
                    />
                    <Client
                        setShow={setClientModalBeneficiaryState}
                        action={setB}
                    />
                </ClientList>
            </Modal>
            <Modal show={clientModalInsurerState} setShow={setClientModalInsurerState}>
                <ClientList changedAttribute="INSURANT">
                    <ClientTable
                        setShow={setClientModalInsurerState}
                        action={setI}
                        restricted={anketaForm.BENEFICIARY_ARCHIVE??null}
                    />
                    <Client
                        setShow={setClientModalInsurerState}
                        action={setI}
                    />
                </ClientList>
            </Modal>
            <Modal show={countryModalState} setShow={setCountryModalState}>
                <Countries 
                    setShow={setCountryModalState}
                    action={setC}
                />
            </Modal>
            <div className="anketaCnt">
                <div className="row">
                    <div className="label">
                        <span>Дата заключения:</span>
                    </div>
                    <div className="input">
                        <input type="date" 
                               max={getMaxDate()} 
                               name="INS_DATE" 
                               value={anketaForm.INS_DATE} 
                               onChange={changeAnketa}
                        />
                        {validator.current.message('INS_DATE', anketaForm.INS_DATE, 'required')}
                    </div>

                    <Period begin={anketaForm.INS_DATEF} end={anketaForm.INS_DATET} changeHandler={changeAnketa} />
                    
                    <div className="label">
                        <span>Страхователь:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => anketaForm.INSURANT ?? setClientModalInsurerState(true)}>
                            {anketaForm.INSURANT ?? 'Выберите...'}
                        </button>
                        {
                            anketaForm.INSURANT&&
                            <button
                                className="remove"
                                onClick={()=>remove(anketaForm.INSURANT_ID, "INSURANT")}
                            >
                                remove
                            </button>
                        }
                        {validator.current.message('INSURANT', anketaForm.INSURANT, 'required')}
                    </div>
                    <div className="label">
                        <span>Бенефициар:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => anketaForm.BENEFICIARY??setClientModalBeneficiaryState(true)}>
                            {anketaForm.BENEFICIARY ?? 'Выберите...'}
                        </button>
                        {
                            anketaForm.BENEFICIARY&&
                            <button 
                                className="remove"
                                onClick={()=>remove(anketaForm.BENEFICIARY_ID, 'BENEFICIARY')}
                            >
                                remove
                            </button>
                        }
                        {validator.current.message('BENEFICIARY', anketaForm.BENEFICIARY, 'required')}
                    </div>
                    <div className="label">
                        <span>Валютные условия:</span>
                    </div>
                    <div className="input">
                        <select name="VAL_USLOVIYA" 
                                value={anketaForm.VAL_USLOVIYA} 
                                onChange={changeAnketa}
                        >
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
                                <select name="VAL_TYPE" 
                                        value={anketaForm.VAL_TYPE} 
                                        onChange={changeAnketa}>
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
                                <input type="number" 
                                       name="VAL_KURS" 
                                       value={anketaForm.VAL_KURS??''} 
                                       onChange={changeAnketa} 
                                />
                                {validator.current.message('VAL_KURS', anketaForm.VAL_KURS, 'required')}
                            </div>
                        </>
                    }
                    <div className="label">
                        <span>Географическая зона:</span>
                    </div>
                    <div className="input">
                        <button onClick={() => setCountryModalState(true)}>
                            {anketaForm.INS_COUNTRY??'Выберите...'}
                        </button>
                        {validator.current.message('INS_COUNTRY', anketaForm.INS_COUNTRY, 'required')}
                    </div>
                    <div className="label">
                        <span>Источник оплаты:</span>
                    </div>
                    <div className="input">
                        <input id="sobst" 
                               type="radio" 
                               name="ISTOCHNIK_O" 
                               onChange={changeAnketa} 
                               value={0} 
                               checked={anketaForm.ISTOCHNIK_O === '0'} 
                        />
                        <label htmlFor="sobst">Собственные средства</label>
                        <input id="budget" 
                               type="radio" 
                               name="ISTOCHNIK_O" 
                               onChange={changeAnketa} 
                               value={1} 
                               checked={anketaForm.ISTOCHNIK_O === '1'} checked
                        />
                        <label htmlFor="budget">Бюджетные средства</label>
                        {validator.current.message('ISTOCHNIK_O', anketaForm.ISTOCHNIK_O, 'required')}
                    </div>
                    <div className="label">
                        <span>Рег.номер:</span>
                    </div>
                    <div className="input">
                        <input type="text" name="INS_NUM" value={anketaForm.INS_NUM??''} onChange={changeAnketa} />
                        {validator.current.message('INS_NUM', anketaForm.INS_NUM, 'required')}
                    </div>
                    <div className="label">
                        <span>Старый номер договора:</span>
                    </div>
                    <div className="input">
                        <input type="text" name="OLD_DOGNUM" value={anketaForm.OLD_DOGNUM??''} onChange={changeAnketa} />
                        {validator.current.message('OLD_DOGNUM', anketaForm.OLD_DOGNUM, 'required')}
                    </div>
                    <div>
                        <button onClick={save}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Anketa;