import React,{useEffect, useState} from 'react';
import "../../node_modules/bootstrap-4-grid/css/grid.min.css";
import { useDispatch } from 'react-redux';
import { anketaCreate } from "../redux/actions";
const {ipcRenderer}=window.require("electron");

const Presentable = (props) => {
  const dispatch = useDispatch();
  const [transports, setTransport]=useState([]);
  const [anketa, setAnketa]=useState({});
  useEffect(()=>{
  	ipcRenderer.send("get-presentable", props.anketa_id);
  	ipcRenderer.on("get-presentable", load);
  	return ()=>{
  		ipcRenderer.removeListener("get-presentable", load);
  	}
  },[props.anketa_id])
  const load=(event, payload)=>{
  	const anketa=payload.anketa.dataValues;
    const transports=payload.transports.map(item=>item.dataValues);
    setAnketa(anketa);
    setTransport(transports);
    dispatch(anketaCreate(anketa))
  }
  const edit=()=>{
  	props.setMenu(21);
  }
  return (
    <div className="padded">
    	{props.anketa_id &&
    	<div className="row">
    		<div className="col-md-6">
    			<h3>ANKETA</h3>
    			<button onClick={edit}>EDIT</button>
	    		<table>
		    		<tbody>
		    			<tr>
		    				<td>Дата заключения:</td>
		    				<td>{anketa.INS_DATE??""}</td>
		    			</tr>
		    			<tr>
		    				<td>Рег.номер:</td>
		    				<td>{anketa.INS_NUM??""}</td>
		    			</tr>
		    			<tr>
		    				<td>Старый номер договора:</td>
		    				<td>{anketa.OLD_DOGNUM??""}</td>
		    			</tr>
		    			<tr>
		    				<td>Географическая зона:</td>
		    				<td>{anketa.INS_COUNTRY??""}</td>
		    			</tr>
		    		</tbody>
		    	</table>	
    		</div>
    		<div className="col-md-6">
    			<h3>TRANSPORT</h3>
		    	<table border="1" className="bordered-table">
		    	    <thead>
		    	    	<tr>
		    	    	    <th>
		    	    		  MODEL
		    	    		</th>
		    	    		<th>
		    	    		  NOMER
		    	    		</th>
		    	    		<th>
		    	    		  PREMIYA
		    	    		</th>
		    	    	</tr>
		    	    </thead>
		    		<tbody>
		    		{transports.map(item=>
		    			<tr>
		    			    <td>
		    	    		  {item.TB_MODEL}
		    	    		</td>
		    	    		<td>
		    	    		  {item.TB_REGNUMBER}
		    	    		</td>
		    	    		<td>
		    	    		  {item.premiyaAmount}
		    	    		</td>
		    			</tr>
		    			)
		    		}
		    		</tbody>
		    	</table>
    		</div>
    	</div>
    	}
    	{!props.anketa_id &&
    		<h1>Please select anketa</h1>
    	}
    </div>
  )
}

export default Presentable;