import React, { useState, useEffect, useCallback } from 'react';
import addDates from '../helpers/addDates';
import { transhesUpdate } from '../redux/actions/transh';
import { useDispatch, useSelector } from 'react-redux';
import { summation } from '../helpers/summation';
const { ipcRenderer } = window.require("electron");

const Transh = (props) => {
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);
  const [initialDate, setInitialDate] = useState('');
  const [interval, setInterval] = useState(30);
  const [count, setCount] = useState(2);
  const [contract, setContract] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [transhes, setTranshes] = useState([]);
  const anketa = useSelector(state => state.anketaReducer);
  
  
  useEffect(() => {
    setInitialDate(anketa.INS_DATE);
    ipcRenderer.send("get-contracts", anketa.id, 1);
    ipcRenderer.send("get-transhes", anketa.id);
    ipcRenderer.on('transch-saved', save2);
    ipcRenderer.on("get-contracts", initContract);
    ipcRenderer.on("get-transhes", initTransh);
    return ()=>{
      ipcRenderer.removeListener("get-contracts", initContract);
      ipcRenderer.removeListener("transch-saved", save2);
      ipcRenderer.removeListener("get-transhes", initTransh);
    }
  }, [])

  const initContract=(event, payload)=>{
    payload=payload.map(item=>item.dataValues);
    setContract(payload);
  }
  
  const initTransh=(event, payload)=>{
    payload=payload.map(item=>{return {...item.dataValues, selected:false}});
    setTranshes(payload);
  }


  const reseparateCount = (value) => {
    let newCount = value;
    setCount(newCount);
    let tempArray = [];
    for (let i = 0; i < newCount; i++) {
      tempArray.push({
        date: addDates(initialDate, i * interval),
        amount: totalAmount / newCount,
        selected: false
      });
    }
    setTranshes(tempArray);
  }
  const reseparateInterval = (value) => {
    let newInterval = value;
    let tempArray = [];
    for (let i = 0; i < count; i++) {
      tempArray.push({
        date: addDates(initialDate, i * newInterval),
        amount: totalAmount / count,
        selected: false
      });
    }
    setTranshes(tempArray);
  }
  const resetDate = (value, index) => {
    const newTranshState = [...transhes];
    newTranshState[index]['date'] = value;
    setTranshes(newTranshState);
  }
  const resetAmount = (value, index) => {
    const newTranshState = [...transhes];
    newTranshState[index]['amount'] = Number(value);
    setTranshes(newTranshState);
  }
  const resetSelected = (index) => {
    const newTranshState = [...transhes];
    newTranshState[index]['selected'] = !transhes[index]['selected'];
    setAllSelected(false);
    setTranshes(newTranshState);
  }
  const addTransh = () => {
    let tempTransh = [...transhes];
    tempTransh.push({ ...tempTransh[tempTransh.length - 1] });
    setTranshes(tempTransh);
    reseparateCount(tempTransh.length);
  }
  const checkAll = () => {
    let newTranshState = [...transhes];
    setAllSelected(!allSelected);

    setTranshes(
      newTranshState.map((item) => {
        item['selected'] = !allSelected;
        return item;
      })
    )
  }
  const deleteTransh = () => {
    setTranshes(
      [...transhes.filter(item => !item.selected)]
    );
    
  }
   useEffect(()=>{
      reseparateCount(transhes.length);
  },[transhes.length]);
  const cancel = () => {
      reset();
  }
  const save = () => {
    if (summation(transhes.map(item => item.amount)) !== summation(contract.map(item => item.premiyaAmount))) {
      alert("Transh amount different than premiya");
      return 0;
    }
    console.log(transhes);
    ipcRenderer.send('transch-create', {
      id: anketa.id,
      data: transhes,
    });
  }
  const save2 = (event, data) => {
    alert("transhes saved");
    ipcRenderer.removeListener('transch-saved', save2);
  }

  const reset = () => {
   
    const summa = summation(contract.map((item) => item.premiyaAmount));
    setTotalAmount(summa);
    setInitialDate(anketa.INS_DATE);
    
      const tempArray = [];
      for (let i = 0; i < count; i++) {
        tempArray.push({
          date: addDates(anketa.INS_DATE, i * interval),
          amount: summa / count,
          selected: false
        });
      }
      setTranshes(tempArray);
  
  }
  useEffect(()=>{
    const summa = summation(contract.map((item) => item.premiyaAmount));
    setTotalAmount(summa);
  },[contract]);

  return (
    <div className="transh">
      <div className="sparse">
        <div className="head">
          <h4>Ожидаемые транши</h4>
          <div className="sparse">
            <button onClick={cancel}>
              Отмена
	    			</button>
            <button onClick={deleteTransh}>
              Удалить
	    			</button>
            <button onClick={save}>
              Сохранить
	    			</button>
          </div>
        </div>
        <span>Период оплат (в днях):</span>
        <input type="number"
          value={interval}
          onChange={e => setInterval(e.target.value)}
          onKeyUp={e => reseparateInterval(e.target.value)}
          disabled={disabled}
        />
        <span>Количество траншов:</span>
        <select disabled={disabled} value={count} onChange={e => reseparateCount(e.target.value)}>
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
              <input type="checkbox"
                onChange={checkAll}
                value={allSelected}
                checked={allSelected}
                disabled={disabled}
              />
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
          {transhes.map((item, index) =>
            <tr key={index}>
              <td>
                <input type="checkbox"
                  value={item.selected}
                  checked={item.selected}
                  onChange={() => resetSelected(index)}
                  disabled={disabled}
                />
              </td>
              <td>
                <input type="date"
                  value={item.date}
                  onChange={e => resetDate(e.target.value, index)}
                  disabled={disabled}
                />
              </td>
              <td>
                <input type="number"
                  value={item.amount}
                  onChange={e => resetAmount(e.target.value, index)}
                  disabled={disabled}
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
              {totalAmount} / <small>{summation(transhes.map(item => item.amount))}</small>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="h-right">
        {!disabled &&
          <button onClick={addTransh}>
            Добавить
    		</button>
        }
      </div>
    </div>
  )
}

export default Transh;