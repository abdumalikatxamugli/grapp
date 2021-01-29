import React, {useState} from 'react';

import {Transport,TransportList} from '../../components';


const TransportTable = (props) => {
	
  const [createState, setCreateState]=useState(false);
  return (
    <div>
    	<div className="mb-10 j-space-between">
        <h5 className="head-text">
        {!createState&&'ТРАНСПОРТНЫЕ СРЕДСТВА'}

        </h5>
       	<button className="bg-skyblue" onClick={()=>setCreateState(!createState)}>
    			{!createState&&'Create'}
    			{createState&&'Back'}
    		</button>
    	</div>
    	{createState&&<Transport/>}
    	{!createState&&<TransportList/>}
    	
    </div>
  )
}

export default TransportTable;