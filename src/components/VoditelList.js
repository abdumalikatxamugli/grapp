import React, { useState } from 'react';

/**
	expects 2 children
	1. ClientTable
	2. CLient Create Form
*/
const VoditelList = (props) => {
	const [creating, setCreating] = useState(false);
	return (
		<div className="container-fluid">
			<div className="row pb-10 pt-10 sticky border-bottom">
				<div className="col-md-6 sparse">
					{
						!creating &&
						<input type="text" placeholder="search" />
					}
				</div>
				<div className="col-md-6 h-right">
					<button className="btn btn-success" onClick={() => setCreating(!creating)}>
						{!creating && 'Create'}
						{creating && 'Back'}
					</button>
				</div>
			</div>


			{
				!creating &&
				React.cloneElement(props.children[0])
			}
			{
				creating &&
				React.cloneElement(props.children[1])
			}
		</div>

	)
}

export default VoditelList;
// import React from 'react';
// import leftArrow from '../assets/icons/arrow-left.svg';

// const VoditelList = (props) => {

//   return (
//   	<div className="p-10">
// 	    <table className="bordered-table" border="1">
// 	    	<thead>
// 	    		<tr style={{backgroundColor:"skyblue"}}>
// 	    			<th></th>
// 	    			<th>First Name</th>
// 	    			<th>Last Name</th>
// 	    			<th>Patronymic</th>
// 	    			<th>Driver Licence Serie</th>
// 	    			<th>Driver Licence Number</th>
// 	    		</tr>
// 			</thead>
// 			<tbody>
// 				<tr>
// 					<td width="5%">
// 						<button>
// 							<img src={leftArrow} alt="leftArrow"/>
// 						</button>
// 					</td>
// 					<td>Lorem</td>
// 					<td>Ispum</td>
// 					<td>Dolar</td>
// 					<td>AA</td>
// 					<td>1231234</td>
// 				</tr>
// 			</tbody>
// 	    </table>
//     </div>
//   )
// }

// export default VoditelList;