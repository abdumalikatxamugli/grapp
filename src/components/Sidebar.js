import React from 'react';
import TopControls from './TopControls'

const Sidebar = (props) => {

  
    return (
    <div className="sidewrapper">
            <TopControls search={true}/>
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