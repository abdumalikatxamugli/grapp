import React, {useState} from 'react';
import {Transh, PaymentForm} from '../../components/';

const Payment = (props) => {
  const [transh, setTranshState]=useState(false);
  return (
  	<>
    <div className="row">
	    <div className="col-md-6">
	    	<div className="mb-10">
	    		Условие оплаты:
	    	</div>
	    	<div >
	    		<div className="mb-10">
		    		<input type="radio" onClick={()=>setTranshState(false)} id="once" name="oplata" checked={!transh} onChange={()=>setTranshState(false)}/>
		    		<label htmlFor="once">
		    			Единовременная оплата
		    		</label>
	    		</div>
	    		<div className="mb-10">
		    		<input type="radio" onClick={()=>setTranshState(true)} id="transh" name="oplata" checked={transh} onChange={()=>setTranshState(true)}/>
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
    {
    	transh&&<Transh/>
    }
    <div>
    	<h4>Оплата</h4>
    	<div>Оплата не произведена</div>
    	<div>Остаток:	<b>1 232 222,21</b></div>
    </div>
    <PaymentForm/>
    </>
  )
}

export default Payment;