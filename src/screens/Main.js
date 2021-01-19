import React from 'react';
import {Sidebar, Sidemenu} from '../components';

const Main=(props)=>{
	return (
		<>
		<Sidemenu/>
		<div className="row">
			<Sidebar/>
		</div>
		</>
	)
}
export default Main;