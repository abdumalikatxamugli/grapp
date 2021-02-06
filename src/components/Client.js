import React, { useState,useEffect }  from "react";
const { ipcRenderer } = window.require("electron");


const Client=(props)=>{
    useEffect(()=>{
      ipcRenderer.on('client-saved', save2)
      if(!props.initialObject){
        return;
      }
      setJurObject({...props.initialObject.yur});
      setFizObject({...props.initialObject.fiz});
      setCommonObject({...props.initialObject.common});

    }, ["init"]);
    
    const [jurObject, setJurObject]=useState({});
    const [fizObject, setFizObject]=useState({});
    const [commonObject, setCommonObject]=useState({});
    const setProp=(type, prop, value)=>{
        switch(type){
            case 'fiz':
                setFizObject({...fizObject, [prop]:value});
                break;
            case 'yur':
                setJurObject({...jurObject, [prop]:value});
                break;
            case 'common':
                setCommonObject({...commonObject, [prop]:value});
                break;
            default:
                break;
        }
    }
    const save=()=>{
        ipcRenderer.send('save-client',{
          c:{...commonObject},
          d:{...props.juridic?jurObject:fizObject},
          type:props.juridic?1:0
        });

    }
    const save2=(event, args)=>{
        if(props.juridic)
            props.action(args.name, args.id);
        else
            props.action(args.name, args.id);

        ipcRenderer.removeListener('client-saved', save2);
        props.setShow(false);
    }
    return (
        <div className="client-form hyper-form">
            <form className="mt-5">
                <div className="input-group">
                    <label >Резидент</label>
                    <div className="form-check">
                        <input type="radio"
                               name="TB_REZIDENT" 
                               value={commonObject.TB_REZIDENT}
                               onChange={e=>setProp('common',e.target.name, true)} 
                        />
                        <label className="form-check-label">
                            Да
                        </label>
                    </div>
                    <div className=" form-check">
                        <input  type="radio" 
                                name="TB_REZIDENT" 
                                value={false} 
                                onChange={e=>setProp('common',e.target.name, false)} 
                        />
                        <label className="form-check-label">
                            Нет
                        </label>
                    </div>
                </div>
                {props.juridic && 
                    <div className="juridic">
                    
                    <div className="input-group">
                        <div className="">
                            <label >ИНН</label><br />
                            <input max="999999999" 
                                   name="TB_ORGINN" 
                                   type="number"
                                   value={jurObject.TB_ORGINN}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                        <div className="">
                            <label >Наименование организации</label><br />
                            <input name="TB_ORGNAME" 
                                   type="text" 
                                   value={jurObject.TB_ORGNAME}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >ОКОНХ</label><br />
                            <input maxLength="5" 
                                   name="TB_KOD_OKONX" 
                                   type="number" 
                                   value={jurObject.TB_KOD_OKONX}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                        <div className="">
                            <label >ОКЕД</label><br />
                            <input maxLength="5"
                                   name="TB_KOD_OKED" 
                                   type="number" 
                                   value={jurObject.TB_KOD_OKED}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >МФО</label><br />
                            <input maxLength="5" 
                                   name="TB_ORGMFO" 
                                   type="number"
                                   value={jurObject.TB_ORGMFO}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                        <div className="">
                            <label >Банк</label><br />
                            <input name="TB_ORGBANK" 
                                   type="text" 
                                   value={jurObject.TB_ORGBANK}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                        <div className="">
                            <label >Расчётный счёт</label><br />
                            <input name="TB_ORGSCHET" 
                                   type="number" 
                                   value={jurObject.TB_ORGSCHET}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >ОКПО</label><br />
                            <input name="TB_KOD_OKPO" 
                                   type="number" 
                                   value={jurObject.TB_KOD_OKPO}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                        <div className="">
                            <label >СОАТО</label><br />
                            <input name="TB_KOD_SOATO" 
                                   type="text" 
                                   value={jurObject.TB_KOD_SOATO}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className=""><br />
                            <label >Директор</label><br />
                            <input name="TB_DIREKTOR"  
                                   type="text" 
                                   value={jurObject.TB_DIREKTOR}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                        <div className=""><br />
                            <label >Бухгалтер</label><br />
                            <input name="TB_BUHGALTER" 
                                   type="text" 
                                   value={jurObject.TB_BUHGALTER}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >Действует на основании</label>
                            <input name="TB_BASIS" 
                                   type="text" 
                                   value={jurObject.TB_BASIS}
                                   onChange={e=>setProp('yur',e.target.name, e.target.value)} 
                            />
                        </div>
                        <div className="">
                            <input type="checkbox" 
                                   name="TB_ISBANK" 
                                   checked={jurObject.TB_ISBANK}
                                   value={jurObject.TB_ISBANK} 
                                   onChange={e=>setProp('yur',e.target.name, !jurObject.TB_ISBANK)} 
                            />
                            <label className="form-check-label">
                                Банк
                            </label>
                        </div>
                    </div>
                    </div>
                }
                {!props.juridic &&
                    <div className="juridic">
                        <div className="input-group">
                            <div>
                                <label >Паспорт</label><br />
                                <input name="TB_PASPSERY" 
                                       type="text" placeholder="AA"
                                       maxLength="2"
                                       value={fizObject.TB_KOD_OKPO}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                       style={{width:'50px'}} 
                                />
                                <input name="TB_PASPNUMBER" 
                                       type="text" 
                                       placeholder="777 77 77" 
                                       maxLength="7"
                                       value={fizObject.TB_KOD_OKPO}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)}
                                />
                            </div>
                            {commonObject.TB_REZIDENT &&
                                <div>
                                    <label >ПИНФЛ</label><br />
                                    <input 
                                        name="TB_PINFL" 
                                        type="text" 
                                        value={fizObject.TB_KOD_OKPO}
                                        onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                    />
                                </div>
                            }
                            <div>
                                <label>Паспорт выдан</label><br />
                                <input name="TB_PASPVIDAN" 
                                       type="text" 
                                       value={fizObject.TB_PASPVIDAN}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                />
                            </div>
                            <div>
                                <label>Когда выдан</label><br />
                                <input name="TB_PASPDATE" 
                                       type="date" 
                                       value={fizObject.TB_PASPDATE}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="">
                                <label>Фамилия</label><br />
                                <input maxLength="20" 
                                       name="TB_SURNAME" 
                                       type="text"
                                       value={fizObject.TB_SURNAME}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                />
                            </div>
                            <div className="">
                                <label>Имя</label><br />
                                <input maxLength="20" 
                                       name="TB_NAME" 
                                       type="text" 
                                       value={fizObject.TB_NAME}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                            />
                            </div>
                            <div className="">
                                <label>Отчество</label><br />
                                <input maxLength="20" 
                                        name="TB_PATRONYM" 
                                        type="text" 
                                        value={fizObject.TB_PATRONYM}
                                        onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label>Пол</label><br />
                                <select 
                                    name="TB_SEX"
                                    value={fizObject.TB_SEX}
                                    onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                >
                                    <option value="0">Муж.</option>
                                    <option value="1">Жен.</option>
                                </select>
                            </div>
                            <div className="form-inline">
                                <label>Дата рождения</label><br />
                                <input type="date" 
                                       name="TB_DATEBIRTH" 
                                       value={fizObject.TB_DATEBIRTH}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                />
                            </div>
                            <div className="form-inline">
                                <label>Вод.права</label><br />
                                <input name="TB_PRAVA_SERY"
                                       value={fizObject.TB_PRAVA_SERY}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)} 
                                />
                                <input name="TB_PRAVA_NUMBER"
                                       value={fizObject.TB_PRAVA_NUMBER}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)}
                                />
                                от
                                <input type="date" 
                                       name="TB_PRAVA_DATE"
                                       value={fizObject.TB_PRAVA_DATE}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label>ЧП</label><br />
                                <input type="checkbox" 
                                       name="TB_CHP"
                                       checked={fizObject.TB_CHP}
                                       value={fizObject.TB_CHP}
                                       onChange={e=>setProp('fiz',e.target.name, !fizObject.TB_CHP)}
                                />
                            </div>
                            <div className="form-inline">
                                <label>Удоств.предп.</label><br />
                                <input type="date" 
                                       name="TB_CERTIFICATE"
                                       value={fizObject.TB_CERTIFICATE}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="form-inline">
                                <label>Дата выдачи</label><br />
                                <input type="date" 
                                       name="TB_CERT_BEGIN"
                                       value={fizObject.TB_CERT_BEGIN}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)}
                                />
                            </div>
                            <div className="form-inline">
                                <label>Дата окончания</label><br />
                                <input type="date" 
                                       name="TB_CERT_END"
                                       value={fizObject.TB_CERT_END}
                                       onChange={e=>setProp('fiz',e.target.name, e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                }
                <div className="input-group">
                    <div className="">
                        <label >Страна</label><br />
                        <select name="TB_COUNTRY"
                                value={commonObject.TB_COUNTRY}
                                onChange={e=>setProp('common',e.target.name, e.target.value)}
                        >
                            <option value="Узбекистан">Узбекистан</option>
                            <option value="Россия">Россия</option>
                        </select>
                    </div>
                    <div className="">
                        <label >Область</label><br />
                        <select name="TB_OBLAST"
                                value={commonObject.TB_OBLAST}
                                onChange={e=>setProp('common',e.target.name, e.target.value)}
                        >
                            <option value="Ташкент">Ташкент</option>
                            <option value="Самарканд">Самарканд</option>
                        </select>
                    </div>
                    <div className="">
                        <label >Район/город</label><br />
                        <select name="TB_RAYON"
                                value={commonObject.TB_RAYON}
                                onChange={e=>setProp('common',e.target.name, e.target.value)}
                        >
                            <option value="Ташкент">Ташкент</option>
                            <option value="Самарканд">Самарканд</option>
                        </select>
                    </div>
                    <div className="">
                        <label >Улица/Квартал</label><br />
                        <input name="TB_ULICA" 
                               type="text" 
                               value={commonObject.TB_ULICA}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="">
                        <label >Дом</label><br />
                        <input name="TB_DOM" 
                               type="text" 
                               value={commonObject.TB_DOM}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label >Квартира</label><br />
                        <input name="TB_KV" 
                               type="text" 
                               value={commonObject.TB_KV}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label >E-mail</label><br />
                        <input name="TB_EMAIL" 
                               type="text" 
                               value={commonObject.TB_EMAIL}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label >Сайт</label><br />
                        <input name="TB_SITE" 
                               type="text" 
                               value={commonObject.TB_SITE}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                </div>
                <div className="input-group">
                    <div className="">
                        <label >Почтовый индекс</label><br />
                        <input name="TB_POCHTA" 
                               type="text" 
                               value={commonObject.TB_POCHTA}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label >Телефон 1</label><br />
                        <input className="form-control phone" 
                               name="TB_PHONE1" 
                               type="text" 
                               value={commonObject.TB_PHONE1}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label >Телефон 2</label><br />
                        <input className="form-control phone" 
                               name="TB_PHONE2" 
                               type="text" 
                               value={commonObject.TB_PHONE2}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label >Факс</label><br />
                        <input className="form-control phone" 
                               name="TB_FAX" 
                               type="text" 
                               value={commonObject.TB_FAX}
                               onChange={e=>setProp('common',e.target.name, e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-success btn-sm float-right my-3" 
                        type="button" 
                        onClick={save}
                >
                    Сохранить
                </button>
            </form>
        </div>
    );
}
export default Client;
