import React from 'react';
import leftArrow from '../assets/icons/arrow-left.svg';

const VoditelList = (props) => {
  return (
  	<div className="p-10">
	    <table className="bordered-table" border="1">
	    	<thead>
	    		<tr style={{backgroundColor:"skyblue"}}>
	    			<th></th>
	    			<th>First Name</th>
	    			<th>Last Name</th>
	    			<th>Patronymic</th>
	    			<th>Driver Licence Serie</th>
	    			<th>Driver Licence Number</th>
	    		</tr>
			</thead>
			<tbody>
				<tr>
					<td width="5%">
						<button>
							<img src={leftArrow} alt="leftArrow"/>
						</button>
					</td>
					<td>Lorem</td>
					<td>Ispum</td>
					<td>Dolar</td>
					<td>AA</td>
					<td>1231234</td>
				</tr>
			</tbody>
	    </table>
    </div>
  )
}

export default VoditelList;