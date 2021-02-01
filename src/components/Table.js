import React, { Fragment} from 'react';
import {deletePayment} from '../redux/actions/oplata';
import {useDispatch} from 'react-redux';

const MyTable = ({
    columns = [],
    data = [],
    onRowClick = () => { }
}) => {
    const dispatch=useDispatch();
    const deleteItem = (id) =>{
        dispatch(deletePayment(id))
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
                            <button onClick={()=>deleteItem(rowKey)}>
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
