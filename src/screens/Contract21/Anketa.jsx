import React from "react";

const Anketa=()=>{
    return(
        <>
        	<div className="anketaCnt">
        		<div className="row">
        			<div className="label">
        				<span>Дата заключения:</span>
        			</div>
        			<div className="input">
        				<input type="date"/>
        			</div>
        			<div className="label">
        				<span>Период:</span>
        			</div>
        			<div className="input date">
        				<input type="date"/>
        				<input type="number"/>
        				<input type="date"/>			
        			</div>
        			<div className="label">
        				<span>Срок:</span>
        			</div>
        			<div className="input">
        				1 год		
        			</div>
        			<div className="label">
        				<span>Страхователь:</span>
        			</div>
        			<div className="input">
        				<button>ХАМКОРБАНК АКЦ.ТИЖ.БАНК</button>		
        			</div>
        			<div className="label">
        				<span>Бенефициар:</span>
        			</div>
        			<div className="input">
        				<button>ХАМКОРБАНК АКЦ.ТИЖ.БАНК</button>	
        			</div>
        			<div className="label">
        				<span>Валютные условия:</span>
        			</div>
        			<div className="input">
        				<select name="" id="">
                           <option>Option 1</option>	
        				</select>
        			</div>
        			<div className="label">
        				<span>Географическая зона:</span>
        			</div>
        			<div className="input">
        				<button>Узбекистан</button>	
        			</div>
        			<div className="label">
        				<span>Источник оплаты:</span>
        			</div>
        			<div className="input">
        				<input type="radio" id="sobst" name="source"/>
        				<label htmlFor="sobst">Собственные средства</label>	
        				<input type="radio" id="budget" name="source"/>
        				<label htmlFor="budget">Бюджетные средства</label>	
        			</div>
        			
        			 
        			

        		</div>
        		
        		

        	</div>
        </>
    )
}
export default Anketa;