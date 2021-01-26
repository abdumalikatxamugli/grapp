import React,{useState} from 'react';
import getCurrentDate from '../helpers/getCurrentDate';


const Period = (props) => {
	const [INS_DATEF,setDatef] = useState(getCurrentDate());
	const [day,setDay] = useState(0);
	const [INS_DATET,setDatet] = useState(getCurrentDate());
	
	const addDays = (date, days)=>{
	    var result = new Date(date);
	    result.setDate(result.getDate() + parseInt(days));
	    var dd = String(result.getDate()).padStart(2, '0');
		var mm = String(result.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = result.getFullYear();
		return yyyy + '-' + mm + '-' + dd
	}
	const subtractDays = (date, days)=>{
	    var result = new Date(date);
	    result.setDate(result.getDate() - parseInt(days));
	    var dd = String(result.getDate()).padStart(2, '0');
		var mm = String(result.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = result.getFullYear();
		return  yyyy + '-' + mm + '-' + dd;
	}
	const syncDays=(change, val)=>{
		switch(change){
			case 'INS_DATEF':
				setDatef(val);
				setDatet(addDays(INS_DATET,day))
				props.changeHandler({target: {name: "INS_DATEF", value: val}})
				break;
			case 'INS_DATET':
				setDatet(val);
				setDatef(subtractDays(INS_DATEF,day))
				props.changeHandler({target: {name: "INS_DATEF", value: subtractDays(val,day)}})
				break;
			case 'day':
				setDay(val);
				props.changeHandler({target: {name: "INS_DATET", value: addDays(INS_DATEF,val)}})
				setDatet(addDays(INS_DATEF,val))
				break;
			default: 
				break;
		}
	}
	return (
		<>
		<div className="label">
			<span>Период:</span>
		</div>
		<div className="input date">
			<input type="date" value={INS_DATEF} onChange={(e)=>syncDays('INS_DATEF',e.target.value)}/>
			<input type="number" value={day} onChange={(e)=>syncDays('day',e.target.value)}/>
			<input type="date" value={INS_DATET} onChange={(e)=>syncDays('INS_DATET',e.target.value)}/>			
		</div>
		<div className="label">
			<span>Срок:</span>
		</div>
		<div className="input">
			<button onClick={(e)=>syncDays('day',365)}>[1 год]</button>
            <button onClick={(e)=>syncDays('day',180)}>[6 мес.]</button>
            <button onClick={(e)=>syncDays('day',91)}>[3 мес.]</button>
            <button onClick={(e)=>syncDays('day',0)}>[Очистить]</button>    	
		</div>
		</>
	)
}

export default Period;