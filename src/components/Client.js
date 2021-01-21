import React  from "react";


function Create(props) {
    const [rez, setRez] = useState(0)
    const isRezident = (e) => {
        setRez(parseInt(e.target.value))
    }
    return (
        <div className="client-form hyper-form">
            <form method="post" action="#" className="mt-5">
                {props.juridic && <div className="juridic">
                    <div className="input-group">
                        <label >Резидент</label>
                        <div className=" form-check">
                            <input type="checkbox" type="radio" name="TB_REZIDENT" value="1" />
                            <label className="form-check-label">
                                Да
        </label>
                        </div>
                        <div className=" form-check">
                            <input type="checkbox" type="radio" name="TB_REZIDENT" value="0" />
                            <label className="form-check-label">
                                Нет
        </label>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="">
                            <label >ИНН</label><br />
                            <input max="999999999" name="TB_ORGINN" type="number" />
                        </div>
                        <div className="">
                            <label >Наименование организации</label><br />
                            <input name="TB_ORGNAME" type="text" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >ОКОНХ</label><br />
                            <input maxLength="5" name="TB_KOD_OKONX" type="number" />
                        </div>
                        <div className="">
                            <label >ОКЕД</label><br />
                            <input maxLength="5" name="TB_KOD_OKED" type="number" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >МФО</label><br />
                            <input maxLength="5" name="TB_ORGMFO" type="number" />
                        </div>
                        <div className="">
                            <label >Банк</label><br />
                            <input name="TB_ORGBANK" type="text" />
                        </div>
                        <div className="">
                            <label >Расчётный счёт</label><br />
                            <input name="TB_ORGSCHET" type="number" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >ОКПО</label><br />
                            <input name="TB_KOD_OKPO" type="number" />
                        </div>
                        <div className="">
                            <label >СОАТО</label><br />
                            <input name="TB_KOD_SOATO" type="text" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className=""><br />
                            <label >Директор</label><br />
                            <input name="TB_DIREKTOR" type="text" />
                        </div>
                        <div className=""><br />
                            <label >Бухгалтер</label><br />
                            <input name="TB_BUHGALTER" type="text" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="">
                            <label >Действует на основании</label>
                            <input name="TB_BASIS" type="text" />
                        </div>
                        <div className="">
                            <input type="checkbox" name="TB_ORGBANK" value="1" />
                            <label className="form-check-label">
                                Банк
            </label>
                        </div>
                    </div>
                </div>}
                {props.juridic == false &&
                    <div className="juridic">
                        <div className="input-group">
                            <label >Резидент</label>
                            <div className=" form-check">
                                <input type="checkbox" type="radio" name="rez" onChange={(e) => isRezident(e)} value="1" />
                                <label className="form-check-label">
                                    Да
        </label>
                            </div>
                            <div className=" form-check">
                                <input type="checkbox" type="radio" name="rez" onChange={(e) => isRezident(e)} value="0" />
                                <label className="form-check-label">
                                    Нет
        </label>
                            </div>
                        </div>
                        <div className="input-group">
                            <div>
                                <label >Паспорт</label><br />
                                <input name="TB_ORGINN" type="text" placeholder="AA" />
                                <input name="PASSPORT" type="text" placeholder="777 77 77" />
                            </div>
                            {rez==1 &&<div>
                                <label >ПИНФЛ</label><br />
                                <input name="TB_ORGINN" type="text" />
                            </div>}
                            <div>
                                <label>Паспорт выдан</label><br />
                                <input name="TB_KOD_OKONX" type="text" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="">
                                <label>Фамилия</label><br />
                                <input maxLength="5" name="TB_KOD_OKED" type="number" />
                            </div>
                            <div className="">
                                <label>Имя</label><br />
                                <input maxLength="5" name="TB_KOD_OKED" type="number" />
                            </div>
                            <div className="">
                                <label>Отчество</label><br />
                                <input maxLength="5" name="TB_KOD_OKED" type="number" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label>Пол</label><br />
                                <select>
                                    <option>Выберите</option>
                                </select>
                            </div>
                            <div className="form-inline">
                                <label>Дата рождения</label><br />
                                <input type="date" />
                            </div>
                            <div className="form-inline">
                                <label>Вод.права</label><br />
                                <input name="" />
                                <input name="" />
                                от
                                <input name="" type="date" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="form-inline">
                                <label>ЧП</label><br />
                                <input type="text" />
                            </div>
                            <div className="form-inline">
                                <label>Дата выдачи</label><br />
                                <input type="date" />
                            </div>
                            <div className="form-inline">
                                <label>Дата окончания</label><br />
                                <input type="date" />
                            </div>
                        </div>
                    </div>}
                <div className="input-group">
                    <div className="">
                        <label >Страна</label><br />
                        <input name="TB_COUNTRY" type="text" />
                    </div>
                    <div className="">
                        <label >Область</label><br />
                        <input name="TB_OBLAST" type="text" />
                    </div>
                    <div className="">
                        <label >Район/город</label><br />
                        <input name="TB_RAYON" type="text" />
                    </div>
                    <div className="">
                        <label >Улица/Квартал</label><br />
                        <input name="TB_ULICA" type="text" />
                    </div>
                </div>
                <div className="input-group">
                    <div className="">
                        <label >Дом</label><br />
                        <input name="TB_DOM" type="text" />
                    </div>
                    <div className="">
                        <label >Квартира</label><br />
                        <input name="TB_KV" type="text" />
                    </div>
                    <div className="">
                        <label >E-mail</label><br />
                        <input name="TB_EMAIL" type="text" />
                    </div>
                    <div className="">
                        <label >Сайт</label><br />
                        <input name="TB_SITE" type="text" />
                    </div>
                </div>
                <div className="input-group">
                    <div className="">
                        <label >Почтовый индекс</label><br />
                        <input name="TB_POCHTA" type="text" />
                    </div>
                    <div className="">
                        <label >Телефон 1</label><br />
                        <input className="form-control phone" name="TB_PHONE1" type="text" />
                    </div>
                    <div className="">
                        <label >Телефон 2</label><br />
                        <input className="form-control phone" name="TB_PHONE2" type="text" />
                    </div>
                    <div className="">
                        <label >Факс</label><br />
                        <input className="form-control phone" name="TB_FAX" type="text" />
                    </div>
                </div>
                <button className="btn btn-success btn-sm float-right my-3" type="submit">Сохранить</button>
            </form>
        </div>
    );
}
export default Create;
