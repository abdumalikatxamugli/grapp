import React from 'react';

const Transh = (props) => {
  return (
    <div className="transh">
    	<div className="sparse">
	    	<h4>Ожидаемые транши</h4>
	    	<span>Период оплат (в днях):</span>	
	    	<input type="number"/>
	    	<span>Количество траншов:</span>	
	    	<select name="" id="">
	    		<option value="2">2</option>
	    		<option value="3">3</option>
	    		<option value="4">4</option>
	    		<option value="5">5</option>
	    	</select>
	    	<button>Распределить</button>
    	</div>
    	<table class="transh-table">
    		<thead>
    			<tr>
    				<td>
    					<input type="checkbox"/>
    				</td>
    				<td>
    					ДАТА
    				</td>
    				<td>
    					СУММА
    				</td>
    			</tr>
    		</thead>
    		<tbody>
    			<tr>
    				<td>
    					<input type="checkbox"/>
    				</td>
    				<td>
    					<input type="date"/>
    				</td>
    				<td>
    					<input type="number"/>
    				</td>
    			</tr>
    		</tbody>
    	</table>
    </div>
  )
}

export default Transh;