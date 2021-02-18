import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


import { Transport, TransportList } from '../../components';
const { ipcRenderer } = window.require("electron");

const TransportTable = (props, ref) => {
  
  
  useEffect(() => {
    
  },[]);

  
  
  const addTransport = () => {
    setCreateState(!createState)
  }
  const [createState, setCreateState] = useState(false);
  const [block, setBlock] = useState(false);
  const anketa=useSelector(state=>state.anketaReducer);

  const warning=()=>{
    alert('Please remove Zalogadatel');
  }

  return (
    <div>
      <div className="mb-10 j-space-between">
        <h5 className="head-text">
          {!createState && 'ТРАНСПОРТНЫЕ СРЕДСТВА'}

        </h5>
        <button className="bg-skyblue" onClick={() => block?warning():setCreateState(!createState)}>
          {!createState && 'Добавить'}
          {createState && 'Назад'}
        </button>
      </div>
      {createState && <Transport addTransport={addTransport} setBlock={setBlock} anketa_id={anketa.id}/>}
      {!createState && <TransportList/>}

    </div>
  )
}

export default TransportTable;