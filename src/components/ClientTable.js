import React,{
	useEffect,
	useState
} from 'react';
import leftArrow from '../assets/icons/arrow-left.svg';
const { ipcRenderer } = window.require("electron");


const ClientTable = (props) => {

	useEffect(()=>{
		ipcRenderer.send('get-clients', props.restricted);
		ipcRenderer.on('get-clients', list);
		ipcRenderer.on('insert-client-from-archive', selectClient);
		return ()=>{
			ipcRenderer.removeListener('get-clients', list);
			ipcRenderer.removeListener('insert-client-from-archive', selectClient);
		}	
	},[]);

	const [clients, setClients]=useState([]);

	const list=(event, payload)=>{
		setClients(payload);
	} 
	const saveSelected=(id)=>{
		ipcRenderer.send('insert-client-from-archive', id);
	}
	const selectClient=(event, name, id, archive_id)=>{
	  props.action(name, id,archive_id);
	  props.setShow(false);
	}

	return (
		<>
			{!props.juridic &&
				<table className="bordered-table" border="1">
					<thead>
						<tr style={{ backgroundColor: "skyblue" }}>
							<th></th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Patronymic</th>
							<th>Passport Serie</th>
							<th>Passport Number</th>
							<th>EDIT</th>
						</tr>
					</thead>
					<tbody>
						{clients.map(item=>{
							if(!item.fiz){
								return;
							}
							return (
								<tr>
									<td width="5%">
										<button onClick={()=>saveSelected(item.id)}>
											<img src={leftArrow} alt="leftArrow" />
										</button>
									</td>
									<td>{item.fiz.TB_NAME}</td>
									<td>{item.fiz.TB_SURNAME}</td>
									<td>{item.fiz.TB_PATRONYM}</td>
									<td>{item.fiz.TB_PASPSERY}</td>
									<td>{item.fiz.TB_PASPNUMBER}</td>
									<td>
										<button onClick={()=>props.edit(item)}>EDIT</button>
									</td>
								</tr>
								)
							})
						}
					</tbody>
				</table>
			}
			{props.juridic &&
				<table className="bordered-table" border="1">
					<thead>
						<tr style={{ backgroundColor: "skyblue" }}>
							<th></th>
							<th>Name</th>
							<th>Inn</th>
							<th>Raschotniy schot</th>
							<th>EDIT</th>
						</tr>
					</thead>
					<tbody>
					{clients.map(item=>{
							if(!item.jur){
								return;
							}
							return (
							<tr>
								<td width="5%">
									<button onClick={()=>selectClient(item.jur.TB_ORGNAME, item.id)}>
										<img src={leftArrow} alt="leftArrow" />
									</button>
								</td>
								<td>{item.jur.TB_ORGNAME}</td>
								<td>{item.jur.TB_ORGINN}</td>
								<td>{item.jur.TB_ORGSCHET}</td>
								<td>
									<button onClick={()=>props.edit(item)}>EDIT</button>
								</td>
							</tr>
							)
						})
					}
					</tbody>
				</table>
			}
		</>
	)
}

export default ClientTable;