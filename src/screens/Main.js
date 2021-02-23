import React, {useState} from 'react';
import {Sidebar, Presentable} from '../components';

const Main=(props)=>{
	const [edit, setEdit]=useState();
	return (
		
		<div className="myrow">
			<Sidebar setEdit={setEdit}/>
			<Presentable anketa_id={edit} setMenu={props.setMenu}/>
		</div>
	)
}
export default Main;