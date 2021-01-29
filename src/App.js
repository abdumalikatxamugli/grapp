import React,{useState} from 'react';
import {Main} from './screens';
import {Sidemenu} from './components';
import { Contract21 } from "./screens";
import './assets/style.css';
import './assets/dogovor.css';
import { Provider } from 'react-redux'
import store from './redux/store';


function App() {
  const [menu, setMenu]=useState(21);

  const changeMenu=(idx)=>{
  	document.getElementsByTagName("body")[0].classList.add('closed-sidemenu');
  	setMenu(idx);
  }

  return (
	  <Provider store={store}>
  		<Sidemenu setMenu={changeMenu}/>
      {menu===0&&<Main/>}
  		{menu===21&&<Contract21/>}
    </Provider>
 );
}

export default App;
