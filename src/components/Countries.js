import React, { useState } from 'react';
import COUNTRIES from '../constants/countries';
const Countries = (props) => {
  const [result, setResult] = useState(COUNTRIES);
  const filter = (e) => {
    setResult(COUNTRIES.filter(item => item.includes(e.target.value)));
  }
  const selectCountry=(country)=>{
    props.action(country);
    props.setShow(false);
  }
  return (
    <div className="counties-component">
      <input type="text" placeholder="search" onChange={e => filter(e)} />
      <ul>
        {result.map((country,idx) =>
          <li onClick={()=>selectCountry(country)} key={idx}>
            {country}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Countries;