import React from 'react';
import leftArrow from '../assets/icons/arrow-left.svg';
const ClientTable = (props) => {
  return (
  	<>
  	{props.juridic&&
    <table className="bordered-table" border="1">
    	<thead>
    		<tr style={{backgroundColor:"skyblue"}}>
    			<th></th>
    			<th>First Name</th>
    			<th>Last Name</th>
    			<th>Patronymic</th>
    			<th>Passport Serie</th>
    			<th>Passport Number</th>
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
    }
    {!props.juridic&&
    <table className="bordered-table" border="1">
    	<thead>
    		<tr style={{backgroundColor:"skyblue"}}>
    			<th></th>
    			<th>Name</th>
    			<th>Inn</th>
    			<th>Raschotniy schot</th>
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
				<td>1234123412341234</td>
			</tr>
		</tbody>
    </table>
    }
    </>
  )
}

export default ClientTable;