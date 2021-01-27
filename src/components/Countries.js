import React, { useState } from 'react';
import COUNTRIES from '../constants/countries';
const Countries = (props) => {
  const [result, setResult] = useState(COUNTRIES);
  const filter = (e) => {
    setResult(COUNTRIES.filter(item => item.includes(e.target.value)));
    props.changeHandler({
      target: {
        value: e.target.value,
        name: props.changedAttribute
      }
    })
  }
  return (
    <div className="counties-component">
      <input type="text" placeholder="search" onChange={e => filter(e)} />
      <ul>
        {result.map((country,idx) =>
          idx!==0?<li onClick={()=>props.changeHandler({target:{name: props.changedAttribute, value: idx}})} key={idx}>{country}</li>:''
        )}
      </ul>
    </div>
  )
}

export default Countries;