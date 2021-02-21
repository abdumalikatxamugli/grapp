import React, { Fragment, useEffect} from 'react';
import {deletePayment} from '../redux/actions/oplata';
const { ipcRenderer } = window.require('electron');

const MyTable = ({
    columns = [],
    data = [],
    onRowClick = () => { }
}) => {
    useEffect(()=>{
        ipcRenderer.on('delete-oplata', deleted);
        return ()=>{
             ipcRenderer.removeListener("delete-oplata",deleted);
        }
    },[])
    const deleteItem = (id) =>{
        ipcRenderer.send("delete-oplata", id);
    }
    const deleted=(event)=>{
        alert('oplata deleted');
    }
   
    return (
        <table className="bordered-table" border="1">
            <thead>
                <tr>
                    {columns.map(({ title }, columnKey) => (
                        <th className="text-center" key={columnKey}>
                            {title}
                        </th>
                    ))}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowKey) => (
                    <tr key={rowKey} onClick={() => onRowClick(row)}>
                        {columns.map(({ dataIndex, render, collapse }, columnKey) => (
                            <Fragment key={columnKey}>
                                <td>{render ? render(row[dataIndex], row, rowKey) : row[dataIndex]}</td>
                            </Fragment>
                        ))}
                        <td>
                            <button onClick={()=>deleteItem(row.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default MyTable;
