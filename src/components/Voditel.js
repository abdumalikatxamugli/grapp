import React, {useState} from 'react';
import VoditelList from './VoditelList';
import VoditelCreate from './VoditelCreate';

const Voditel = (props) => {
  const [createState, setCreateState]=useState(false);
  return (
    <>
    <div class="sticky border-bottom j-space-between p-10">
        <h4 className="head-text p-10">
            {createState&&'Create new Driver'}
            {!createState&&'List of drivers'}
        </h4>
        <button onClick={()=>setCreateState(!createState)}>
            {createState&&'Back'}
            {!createState&&'Create'}
        </button>
    </div>
    {!createState&&<VoditelList/>}
    {createState&&<VoditelCreate/>}
    </>
  )
}

export default Voditel;