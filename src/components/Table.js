import React, { Fragment } from 'react'
const MyTable = ({
    columns = [],
    data = [],
    onRowClick = () => { }
}) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(({ title }, columnKey) => (
                        <th className="text-center" key={columnKey}>
                            {title}
                        </th>
                    ))}
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
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default MyTable;
