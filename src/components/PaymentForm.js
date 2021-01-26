import React from 'react';

const PaymentForm = (props) => {
  return (
    <div className="paymentForm">
    	<div className="row">
    		<div className="col-md-2 mb-10">
	    		<div className="mb-10">Дата:</div>
	    		<input type="date"/>
    		</div>
    		<div className="col-md-3 mb-10">
	    		<div className="mb-10">Сумма оплаты:</div>
	    		<input type="number"/>
    		</div>
    		<div className="col-md-2 mb-10">
	    		<div className="mb-10">Вид оплаты:</div>
	    		<select>
	    			<option value="">Счет агента</option>
	    		</select>	
    		</div>
            <div className="col-md-3 mb-10">
	    		<div className="mb-10">№ плат.документа / Примечание:</div>
	    		<input/>
    		</div>
    		<div className="col-md-2 mb-10 v-bottom">
    			<button>Оплата</button>
    		</div>
    	</div>
    </div>
  )
}

export default PaymentForm;