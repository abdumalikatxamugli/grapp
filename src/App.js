import React,{useState} from 'react';
import {Main} from './screens';
import {Sidemenu} from './components';
import { Contract21 } from "./screens";
import './assets/style.css';
import './assets/dogovor.css';


function App() {
  const [menu, setMenu]=useState(0);

  const changeMenu=(idx)=>{
  	document.getElementsByTagName("body")[0].classList.add('closed-sidemenu');
  	setMenu(idx);
  }

  return (
	<>
  		<Sidemenu setMenu={changeMenu}/>
      {menu===0&&<Main/>}
  		{menu===21&&<Contract21/>}
    </>
 );
}

export default App;
