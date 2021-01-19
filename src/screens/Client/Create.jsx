import React, { useEffect, useState } from "react";
// const { ipcRenderer } = window.require('electron');
function Create(props) {

  return (
    <form method="post" action="#" className="mt-5">
      <div className="row">
        <label >Резидент</label>
        <div className="col-12 form-check">
          <input className="form-check-input" type="radio" name="TB_REZIDENT" value="option1" />
          <label className="form-check-label">
            Да
        </label>
        </div>
        <div className="col-12 form-check">
          <input className="form-check-input" type="radio" name="TB_REZIDENT" value="0" />
          <label className="form-check-label">
            Нет
        </label>
        </div>
        {/* <div className="col-12 form-check">
          <label className="form-check-label">Да</label>
          <input type="radio" className="form-check-input" name="TB_REZIDENT" value="1" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="form-check-label">Нет</label>&nbsp;
                <input type="radio" className="form-check-input" name="TB_REZIDENT" value="0" />
        </div> */}
      </div>
      <div className="row">
        <div className="col-4">
          <label >ИНН</label><br />
          <input className="form-control input-sm" max="999999999" name="TB_ORGINN" type="number" />
        </div>
        <div className="col-8">
          <label >Наименование организации</label><br />
          <input className="form-control input-sm" name="TB_ORGNAME" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >ОКОНХ</label><br />
          <input className="form-control input-sm" maxLength="5" name="TB_KOD_OKONX" type="number" />
        </div>
        <div className="col-8">
          <label >ОКЕД</label><br />
          <input className="form-control input-sm" maxLength="5" name="TB_KOD_OKED" type="number" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >МФО</label><br />
          <input className="form-control input-sm" maxLength="5" name="TB_ORGMFO" type="number" />
        </div>
        <div className="col-4">
          <label >Банк</label><br />
          <input className="form-control input-sm" name="TB_ORGBANK" type="text" />
        </div>
        <div className="col-4">
          <label >Расчётный счёт</label><br />
          <input className="form-control input-sm" name="TB_ORGSCHET" type="number" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >ОКПО</label><br />
          <input className="form-control input-sm" name="TB_KOD_OKPO" type="number" />
        </div>
        <div className="col-8">
          <label >СОАТО</label><br />
          <input className="form-control input-sm" name="TB_KOD_SOATO" type="text" />
        </div>
      </div>
      <div className="row from-group">
        <div className="col-4"><br />
          <label >Директор</label><br />
          <input className="form-control input-sm" name="TB_DIREKTOR" type="text" />
        </div>
        <div className="col-8"><br />
          <label >Бухгалтер</label><br />
          <input className="form-control input-sm" name="TB_BUHGALTER" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label >Действует на основании</label>
          <input className="form-control input-sm" name="TB_BASIS" type="text" />
        </div>
        <div className="col-8 form-check">
          <input className="form-check-input" name="TB_ORGBANK" value="1" />
          <label className="form-check-label">
            Банк
            </label>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label >Страна</label><br />
          <input className="form-control input-sm" name="TB_COUNTRY" type="text" />
        </div>
        <div className="col-3">
          <label >Область</label><br />
          <input className="form-control input-sm" name="TB_OBLAST" type="text" />
        </div>
        <div className="col-3">
          <label >Район/город</label><br />
          <input className="form-control input-sm" name="TB_RAYON" type="text" />
        </div>
        <div className="col-3">
          <label >Улица/Квартал</label><br />
          <input className="form-control input-sm" name="TB_ULICA" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label >Дом</label><br />
          <input className="form-control input-sm" name="TB_DOM" type="text" />
        </div>
        <div className="col-3">
          <label >Квартира</label><br />
          <input className="form-control input-sm" name="TB_KV" type="text" />
        </div>
        <div className="col-3">
          <label >E-mail</label><br />
          <input className="form-control input-sm" name="TB_EMAIL" type="text" />
        </div>
        <div className="col-3">
          <label >Сайт</label><br />
          <input className="form-control input-sm" name="TB_SITE" type="text" />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <label >Почтовый индекс</label><br />
          <input className="form-control input-sm" name="TB_POCHTA" type="text" />
        </div>
        <div className="col-3">
          <label >Телефон 1</label><br />
          <input className="form-control phone" name="TB_PHONE1" type="text" />
        </div>
        <div className="col-3">
          <label >Телефон 2</label><br />
          <input className="form-control phone" name="TB_PHONE2" type="text" />
        </div>
        <div className="col-3">
          <label >Факс</label><br />
          <input className="form-control phone" name="TB_FAX" type="text" />
        </div>
      </div>
      <button className="btn btn-success btn-sm float-right my-3" type="submit">Сохранить</button>
    </form>
  );
}
export default Create;
