import React from 'react';
import { useDispatch } from 'react-redux';
import leftArrow from '../assets/icons/arrow-left.svg';
import { voditelAdd } from "../redux/actions/transport";


const VoditelTable = (props) => {
    const dispatch = useDispatch()
    const appendVoditel = (id, TB_NAME) => {
        dispatch(voditelAdd(props.transportIndex, id, TB_NAME))
        props.setShow()
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width="5%">
                            <button onClick={() => appendVoditel(1, 'Mannop')}>
                                <img src={leftArrow} alt="leftArrow" />
                            </button>
                        </td>
                        <td>Lorem</td>
                        <td>Ispum</td>
                        <td>Dolar</td>
                        <td>AA</td>
                        <td>1231234</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default VoditelTable;