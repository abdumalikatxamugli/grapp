import React,{useEffect, useState} from 'react';
import TopControls from './TopControls';
// import done from '../assets/icons/done.svg';
import done_all from '../assets/icons/done_all.svg';

const { ipcRenderer } = window.require("electron");
const Sidebar = (props) => {

    const [anketas, setAnketas]=useState([]);
    useEffect(()=>{
        ipcRenderer.send("get-anketas");
        ipcRenderer.on("get-anketas", load);
        return ()=>{
            ipcRenderer.removeListener("get-anketas", load);
        }
    },[])
    const load=(event, payload)=>{
        console.log(payload);
        setAnketas(payload);
    }

    return (
    <div className="sidewrapper">
            <TopControls search={true}/>
            <div className="sidebar">
                <ul>
                    {anketas.map(item=>(
                    <li onClick={()=>props.setEdit(item.id)}>
                        <div className="ituri">
                            <div>
                                21
                            </div>
                        </div>
                        <div className="title">
                            <h4 className="insurant">{item.INS_NUM}</h4>
                            <div className="bottom">
                                <div className="dognum">{item.OLD_DOGNUM}</div>
                                <div className="status">
                                    <img src={done_all} alt=""/>
                                    <div className="date">{item.INS_DATE}</div>
                                </div>
                            </div>
                        </div>
                    </li>
                    )
                    )}
                </ul>
            </div>
        </div>
  )
}

export default Sidebar;