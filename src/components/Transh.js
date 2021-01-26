import React, {useState} from 'react';
import addDates from '../helpers/addDates';

const Transh = (props) => {
  const totalAmount=150000;
  const initialDate='2021-01-28';

  const [transhes, setTranshes]=useState([{
        date:'2021-01-28',
        amount:130000
  },
  {
        date:'2021-02-28',
        amount:130000
  },
  {
        date:'2021-03-28',
        amount:130000
  }
  ]);

  const [interval, setInterval]=useState(30);
  const [count, setCount]=useState(transhes.length);

  const reseparateCount=(e)=>{
    let newCount=e.target.value;
    setCount(newCount);
    let tempArray=[];
    for(let i=0;i<newCount;i++){
        tempArray.push({
            date:addDates(initialDate, i*interval),
            amount:totalAmount/newCount
        });
    }
    setTranshes(tempArray);
  }
  const reseparateInterval=(e)=>{
    let newInterval=e.target.value;
    let tempArray=[];
    for(let i=0;i<count;i++){
        tempArray.push({
            date:addDates(initialDate, i*newInterval),
            amount:totalAmount/count
        });
    }
    setTranshes(tempArray);
  }
  const resetDate=(value, index)=>{
    const newTranshState=[...transhes];
    newTranshState[index]['date']=value;
    setTranshes(newTranshState);
  }
  const resetAmount=(value, index)=>{
    const newTranshState=[...transhes];
    newTranshState[index]['amount']=Number(value);
    setTranshes(newTranshState);
  }
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
	    	<input type="number" 
                   value={interval} 
                   onChange={e=>setInterval(e.target.value)} 
                   onKeyUp={reseparateInterval}
            />
	    	<span>Количество траншов:</span>	
	    	<select name="" id="" value={count} onChange={reseparateCount}>
	    		<option value="2">2</option>
	    		<option value="3">3</option>
	    		<option value="4">4</option>
	    		<option value="5">5</option>
	    	</select>
	    	{/*<button>Распределить</button>*/}
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
                {transhes.map((item, index)=>
        			<tr key={index}>
        				<td>
        					<input type="checkbox"/>
        				</td>
        				<td>
        					<input type="date" 
                                value={item.date} 
                                onChange={e=>resetDate(e.target.value,index)}/>
        				</td>
        				<td>
        					<input type="number" 
                                    value={item.amount}
                                    onChange={e=>resetAmount(e.target.value,index)}
                            />
        				</td>
        			</tr>
                )}
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
    	<div className="h-right">
    		<button>
    			Добавить
    		</button>
    	</div>
    </div>
  )
}

export default Transh;