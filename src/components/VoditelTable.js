import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import leftArrow from '../assets/icons/arrow-left.svg';
import { voditelAdd } from "../redux/actions/transport";
const { ipcRenderer } = window.require("electron");

const VoditelTable = (props) => {
    const [voditels, setVoditels]=useState([]);
    const anketa=useSelector(state=>state.anketaReducer);

    useEffect(()=>{
        ipcRenderer.send('get-voditels', props.transport_id)
        ipcRenderer.on("get-voditels", populate);
        ipcRenderer.on("choose-voditel", choose);
        return ()=>{
            ipcRenderer.removeListener("get-voditels", populate);
        }
    }, []);
    const appendVoditel = (id) => {
        ipcRenderer.send('choose-voditel', id, props.transport_id);
    }
    const choose=(event)=>{
        props.setShow(false);
    }
    const populate=(event, payload)=>{
        setVoditels(payload);   
    }

    return (
        <>
            <table className="bordered-table" border="1">
                <thead>
                    <tr style={{ backgroundColor: "skyblue" }}>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Patronymic</th>
                        <th>Passport Serie</th>
                        <th>Passport Number</th>
                        <th>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                {voditels.map((item, index)=>
                    <tr key={index}>
                        <td width="5%">
                            <button onClick={() => appendVoditel(item.id)}>
                                <img src={leftArrow} alt="leftArrow" />
                            </button>
                        </td>
                        <td>{item.TB_NAME}</td>
                        <td>{item.TB_SURNAME}</td>
                        <td>{item.TB_PATRONYM}</td>
                        <td>{item.TB_PASPSERY}</td>
                        <td>{item.TB_PASPNUMBER}</td>
                        <td><button onClick={()=>props.edit(item)}>EDIT</button></td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    )
}

export default VoditelTable;