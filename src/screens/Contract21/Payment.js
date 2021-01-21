import React from 'react';
import {Transh} from '../../components/'

const Payment = (props) => {
  return (
  	<>
    <div className="row">
	    <div className="col-md-6">
	    	<div className="mb-10">
	    		Условие оплаты:
	    	</div>
	    	<div >
	    		<div className="mb-10">
		    		<input type="radio" id="once" name="oplata"/>
		    		<label htmlFor="once">
		    			Единовременная оплата
		    		</label>
	    		</div>
	    		<div className="mb-10">
		    		<input type="radio" id="transh" name="oplata"/>
		    		<label htmlFor="transh">
		    			Оплата траншами
		    		</label>
		    	</div>
	    	</div>
	    </div>
	    <div className="col-md-6">
	    	<div className="mb-10">
    		Страховая сумма: 100 000,00	
			</div>
			<div className="mb-10">
	    		Премия:	1 000,01
			</div>
			<div  className="mb-10">
	    		Учет: Узбекский сум	
			</div>
			<div  className="mb-10">
	    		Оплата:	Узбекский сум
			</div>
	    </div>
    </div>
    <Transh/>
    </>
  )
}

export default Payment;