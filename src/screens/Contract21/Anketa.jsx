import React, {useState} from "react";
import {ClientList, Modal,Countries, Period} from '../../components/';
import CURRENCYCONDITIONS from '../../constants/currencyConditions';
import getMaxDate from '../../helpers/getMaxDate';

const Anketa=()=>{
    const [clientModalState, setClientModalState]=useState(false);
    const [countryModalState, setCountryModalState]=useState(false);
    
    return(
        <>
            <Modal show={clientModalState} setShow={setClientModalState}>
                <ClientList/>
            </Modal>
            <Modal show={countryModalState} setShow={setCountryModalState}>
              <Countries/>  
            </Modal>

        	<div className="anketaCnt">
        		<div className="row">
        			<div className="label">
        				<span>Дата заключения:</span>
        			</div>
        			<div className="input">
        				<input type="date" max={getMaxDate()}/>
        			</div>
        			<Period/>
        			<div className="label">
        				<span>Страхователь:</span>
        			</div>
        			<div className="input">
        				<button onClick={()=>setClientModalState(true)}>Выберите...</button>		
        			</div>
        			<div className="label">
        				<span>Бенефициар:</span>
        			</div>
        			<div className="input">
        				<button onClick={()=>setClientModalState(true)}>Выберите...</button>	
        			</div>
        			<div className="label">
        				<span>Валютные условия:</span>
        			</div>
        			<div className="input">
        				<select name="" id="">
                           {
                            CURRENCYCONDITIONS.map((item, index)=>{
                                return(
                                    <option key={index} value={index} title={item}>
                                          {item.slice(0,100)} ...
                                    </option>
                                    )
                                })
                           }
        				</select>
        			</div>
        			<div className="label">
        				<span>Географическая зона:</span>
        			</div>
        			<div className="input">
        				<button onClick={()=>setCountryModalState(true)}>Узбекистан</button>	
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