import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';

import { Transport, TransportList } from '../../components';


const TransportTable = forwardRef((props, ref) => {
  const globalTransports = useSelector(state => state.transportReducer);
  const [transports, setTransports] = useState([])
  const validator = useRef(new SimpleReactValidator())
  const [, forceUpdate] = useState();
  useEffect(() => {
    setTransports([...globalTransports])
  }, [globalTransports])
  useImperativeHandle(ref, () => ({
    showValidationMessages() {
      props.givePermissionToStpep(3)
    }
  }));
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
})

export default TransportTable;