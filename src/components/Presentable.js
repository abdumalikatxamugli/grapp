import React,{useEffect} from 'react';
import "../../node_modules/bootstrap-4-grid/css/grid.min.css";
const {ipcRenderer}=window.require("electron");

const Presentable = (props) => {
  useEffect(()=>{
  	ipcRenderer.send("get-presentable", props.anketa_id);
  	ipcRenderer.on("get-presentable", load);
  	return ()=>{
  		ipcRenderer.removeListener("get-presentable", load);
  	}
  })
  const load=()=>{
  	console.log("getter");
  }
  return (
    <div className="padded">
    	{props.anketa_id &&
    	<div className="row">
    		<div className="col-md-6">
    			<h3>ANKETA</h3>
	    		<table>
		    		<tbody>
		    			<tr>
		    				<td>Дата заключения:</td>
		    				<td></td>
		    			</tr>
		    			<tr>
		    				<td>Страхователь:</td>
		    				<td></td>
		    			</tr>
		    			<tr>
		    				<td>Бенефициар:</td>
		    				<td></td>
		    			</tr>
		    			<tr>
		    				<td>Валютные условия:</td>
		    				<td></td>
		    			</tr>
		    			<tr>
		    				<td>Географическая зона:</td>
		    				<td></td>
		    			</tr>
		    			<tr>
		    				<td>Источник оплаты:</td>
		    				<td></td>
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
		    			<tr>
		    			    <td>
		    	    		  MODEL
		    	    		</td>
		    	    		<td>
		    	    		  NOMER
		    	    		</td>
		    	    		<td>
		    	    		  PREMIYA
		    	    		</td>
		    			</tr>
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