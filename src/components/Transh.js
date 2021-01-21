import React from 'react';

const Transh = (props) => {
  return (
    <div className="transh">
    	<div className="sparse">
	    	<div className="head">
	    		<h4>Ожидаемые транши</h4>
	    		<div className="sparse">
	    			<button>
	    				Отмена
	    			</button>
	    			<button>
	    				Удалить
	    			</button>
	    			<button>
	    				Сохранить
	    			</button>
	    		</div>
	    	</div>
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
    	<table className="transh-table" border="1">
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
    		<tfoot>
    			<tr>
    				<td>
    					Сумма:
    				</td>
    				<td>
    					
    				</td>
    				<td>
    					123 321.09
    				</td>
    			</tr>
    		</tfoot>
    	</table>
    	<div class="h-right">
    		<button>
    			Добавить
    		</button>
    	</div>
    </div>
  )
}

export default Transh;