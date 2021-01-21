import React from 'react';

const Voditel = (props) => {
  return (
    <form className="voditel">
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Фамилия:
    		</div>
    		<div className="col-md-8">
    			<input type="text"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Имя:
    		</div>
    		<div className="col-md-8">
    			<input type="text"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Отчество:
    		</div>
    		<div className="col-md-8">
    			<input type="text"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Дата рождения:
    		</div>
    		<div className="col-md-8">
    			<input type="date"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Стаж:
    		</div>
    		<div className="col-md-8">
    			<input type="number"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Права №:
    		</div>
    		<div className="col-md-8">
    			<div className="passport">
	    			<input type="text"/>
	    			<input type="text"/>
    			</div>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Права РЭО:
    		</div>
    		<div className="col-md-8">
    			<input type="text"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Дата выдачи:
    		</div>
    		<div className="col-md-8">
    			<input type="date"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Дата:
    		</div>
    		<div className="col-md-8">
    			<input type="date"/>
    		</div>
    	</div>  
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Паспорт №:
    		</div>
    		<div className="col-md-8">
    			<div className="passport">
	    			<input type="text"/>
	    			<input type="text"/>
    			</div>
    		</div>
    	</div>   	
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Место выдачи:
    		</div>
    		<div className="col-md-8">
    			<input type="text"/>
    		</div>
    	</div>    	
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Дата выдачи:
    		</div>
    		<div className="col-md-8">
    			<input type="date"/>
    		</div>
    	</div> 
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Дата преобритения:
    		</div>
    		<div className="col-md-8">
    			<input type="date"/>
    		</div>
    	</div>   	
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Доверенность №:
    		</div>
    		<div className="col-md-8">
    			<input type="text"/>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Пол:
    		</div>
    		<div className="col-md-8">
    			<select>
    				<option value="1">Муж.</option>
    				<option value="1">Жен.</option>
    			</select>
    		</div>
    	</div>
    	<div className="row mb-10">
    		<div className="col-md-4 v-center-right">
    			Права категория:
    		</div>
    		<div className="col-md-8 sparse">
    			<span>A</span>	
    			<input type="checkbox"/>
    			<span>B</span>	
    			<input type="checkbox"/>
    			<span>C</span>	
    			<input type="checkbox"/>
    			<span>D</span>	
    			<input type="checkbox"/>
    			<span>E</span>	
    			<input type="checkbox"/>
			</div>
    	</div>   
    </form>
  )
}

export default Voditel;