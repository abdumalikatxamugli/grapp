import React from 'react';
import {Voditel} from '../../components';
import addImage from '../../assets/icons/add.svg';
import editImg from '../../assets/icons/edit.svg';
import "../../../node_modules/bootstrap-4-grid/css/grid.min.css";

const TransportTable = (props) => {
	const drop = (ev) => {
        ev.currentTarget.parentNode.parentNode.classList.toggle("open");
    }
  return (
    <div>
    	{/*<table className="transportTable bordered-table" border="1">
    		<thead >
    		    <th width="3%">
    		   	
    		    </th>
				<th>
    				Марка и Модель
    			</th>
    			<th>
    				Регистр. №
    			</th>
    			<th>
    				Год выпуска
    			</th>
    			
    		</thead>
    		<tbody>
    			<tr className="closed">
    			    <td>
    			   	  <img src={addImage}  
    			   	  	   className="cursor-pointer" 
    			   	  	   onClick={(e)=>drop(e)}
    			   	  	   alt="expand"
    			   	  />
    			    </td>
    				<td>
    					МТЗ МТЗ-80
    				</td>
    				<td>
    					10X379EA
    				</td>
    				<td>
    					2011
    				</td>
    			</tr>
    			<tr>
    				<td colSpan="4">
    					<div  className="thedrop">
	    					<div className="row">
	    						<div className="col-md-4 attrs">
	    							<span>Цвет:</span>
	    							<span>
	    								RED
			    					</span>
	    						</div>
	    						<div className="col-md-4 attrs">
	    							<span>№ кузова (шасси):</span>
	    							<span>
	    								123 (123)
			    					</span>
	    						</div>
	    						<div className="col-md-4 attrs">
	    							<span>№ двигателя:</span>
	    							<span>
			    						
			    						 123
			    					</span>
	    						</div>
	    						<div className="col-md-4 attrs">
	    							<span>№ тех. паспорта:</span>
	    							<span>
			    						11 123123123
			    					</span>
	    						</div>
	    						<div className="col-md-4 attrs">
	    							<span>Стоимость ТС:</span>
	    							<span>
			    						 136 000,00
			    					</span>
	    						</div>
	    						<div className="col-md-4 attrs">
	    							<span>Противоугонная сигнализация:</span>
	    							<span>
			    						<input type="checkbox" disabled checked/>
			    					</span>
	    						</div>
	    					</div>
	    					<div className="row">
	    						<div className="col-md-12 attrs">
	    							<div className="v-center">
			    						Водители № доверенности, прав (категория):
			    						<img src={addImage}  
					    			   	  	   className="cursor-pointer" 
					    			   	  	   alt="expand"
					    			   	  	/>
			    					</div>
			    					<ul>
			    						<li>
			    								<button>YANGI USER USER (AA123321, DOVERENNOST, B:C)</button>
			    						</li>
			    					</ul>
			    				</div>
	    						<div className="col-md-12 attrs">
	    							<div>
			    						Примечания (наличие повреждений):
			    					</div>
			    					<ul>
			    						<li>POVREJDENIYA1</li>
			    					</ul>
			    				</div>
	    					</div>
	    					<div className="editBtnCnt">
	    						<button>
	    							<img src={editImg} alt="edit" class="cursor-pointer"/>
	    						</button>	
	    					</div>
    					</div>
    				</td>
    			</tr>
    		</tbody>	
    	</table>*/}
    	<Voditel/>
    </div>
  )
}

export default TransportTable;