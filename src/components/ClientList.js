import React, {useState} from 'react';

/**
	expects 2 children
	1. ClientTable
	2. CLient Create Form
*/
const ClientList = (props) => {
  const [juridic, setJuridic]=useState(false);
  const [creating, setCreating]=useState(false);

  return (
  	<div className="container-fluid">
	  	<div className="row pb-10 pt-10 sticky border-bottom">
	  		<div className="col-md-6 sparse">
		  	<select value={juridic} onChange={(e)=>setJuridic(e.target.value==='true')}>
		  		<option value={false}>Физ.</option>
		  		<option value={true}>Юрд.</option>
		  	</select>
		  	{
		  		!creating&&
		  		<input type="text" placeholder="search"/>
		  	}
		  	</div>
		  	<div className="col-md-6 h-right">
		  		<button className="btn btn-success" onClick={()=>setCreating(!creating)}>
		  			{!creating&&'Create'}
		  			{creating&&'Back'}
		  		</button>
		  	</div>
	  	</div>
	  	
  	
  	{
  		!creating&&
  		React.cloneElement(props.children[0], { juridic: juridic})
  	}
  	{
  		creating&&
  		React.cloneElement(props.children[1], { juridic: juridic, initialObject:{}})
  	}
  	</div>
    
  )
}

export default ClientList;