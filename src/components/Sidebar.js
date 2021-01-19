import {React, useEffect} from 'react';
import TopControls from './TopControls'

const Sidebar = (props) => {

   	const sidebar=()=>{
        document.getElementsByTagName("body")[0].classList.remove('closed-sidemenu');
    }

    const close_sidebar=()=>{
        document.getElementsByTagName("body")[0].classList.add('closed-sidemenu');
    }
    
  return (
    <div className="sidewrapper">
            <TopControls/>
            <div className="sidebar">
                <ul>
                    <li>
                        <div className="ituri">
                            <div>
                                21
                            </div>
                        </div>
                        <div className="title">
                            <h4 className="insurant">ХАМКОРБАНК АКЦ.ТИЖ.БАНК</h4>
                            <div className="bottom">
                                <div className="dognum">10/21/1000</div>
                                <div className="date">17.01.2021</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Sidebar;