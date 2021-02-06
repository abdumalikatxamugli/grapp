import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import { Transport, TransportList } from '../../components';


const TransportTable = (props, ref) => {
  const globalTransports = useSelector(state => state.transportReducer);
  const [transports, setTransports] = useState([])
  
  useEffect(() => {
    setTransports([...globalTransports])
  }, [globalTransports])
  
  const addTransport = (given) => {
    setCreateState(!createState)
    setTransports([...transports])
  }
  
  const [createState, setCreateState] = useState(false);
  return (
    <div>
      <div className="mb-10 j-space-between">
        <h5 className="head-text">
          {!createState && 'ТРАНСПОРТНЫЕ СРЕДСТВА'}

        </h5>
        <button className="bg-skyblue" onClick={() => setCreateState(!createState)}>
          {!createState && 'Добавить'}
          {createState && 'Назад'}
        </button>
      </div>
      {createState && <Transport addTransport={addTransport} />}
      {!createState && <TransportList data={transports} />}

    </div>
  )
}

export default TransportTable;