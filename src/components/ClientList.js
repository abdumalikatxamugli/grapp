import React, {useState} from 'react';
import Client from './Client';
import ClientTable from './ClientTable';

const ClientList = (props) => {
  const [juridic, setJuridic]=useState(false);
  const [creating, setCreating]=useState(false);
  console.log(props);
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
  		<ClientTable changedAttribute={props.changedAttribute} changeHandler={props.changeHandler} juridic={juridic}/>
  	}
  	{
  		creating&&
  		<Client juridic={juridic}/>
  	}
  	</div>
    
  )
}

export default ClientList;