import React from 'react';
import addImg from '../assets/icons/add.svg';
import translateImg from '../assets/icons/translate.svg';
import exitImg from '../assets/icons/exit.svg';


const Sidemenu = (props) => {
  const drop = (ev) =>{
        let elem=ev.target;
        elem.parentNode.classList.toggle("open-drop");
    }
  return (
    <>
    <div className="sidemenu" id="sidemenu">
        <div className="ava">
            <div className="name">
                Abduganiev Abdumalik
            </div>
            <div className="division">
                Центральный офис Гросс
            </div>
        </div>
        <ul>
            <li>
                <div className="list-item" onClick={ev=>drop(ev)}>
                    <div className="img">
                        <img src={addImg} alt=""/>
                    </div>
                    <div className="text">
                        Новый договор
                    </div>
                </div>
                <ul className="drop">
                    <li>
                        <abbr title="21.Страхование транспортных средств, выставляемых в залог">
                            21.Страхование транспортных средств, выставляемых в залог
                        </abbr>
                    </li>
                </ul>
            </li>
            <li>
                <div className="list-item" onclick="drop(this)">
                    <div className="img">
                        <img src={translateImg} alt=""/>
                    </div>
                    <div className="text">
                        Русский
                    </div>
                </div>
                <ul className="drop">
                    <li>O'zbekcha</li>
                </ul>
            </li>
            <li>
                <div className="list-item">
                    <div className="img">
                        <img src={exitImg} alt=""/>
                    </div>
                    <div className="text" onclick="exit()">
                        Выйти
                    </div>
                </div>
            </li>
        </ul>
        <div className="orgname">
            <div className="org">Gross offline app</div>
            <div className="version">Version: 0.0.1</div>
        </div>
    </div>
    <div className="over" onclick="close_sidebar()"></div>
    </>
  )
}

export default Sidemenu;