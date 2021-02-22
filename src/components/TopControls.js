import React,{useState} from 'react';
import menu from '../assets/icons/menu.svg';
import lock_open from '../assets/icons/lock_open.svg';
import lock_closed from '../assets/icons/lock.svg';
import { useDispatch } from 'react-redux';
import { authLogout } from '../redux/actions/auth';


const TopControls = (props) => {
  const dispatch=useDispatch() 
  const [lock, setLock]=useState(false);
  const open_sidemenu=()=>{
    document.getElementsByTagName("body")[0].classList.remove('closed-sidemenu');
  }
  return (
    		<div className="top-control">
                <span className="hamburger" onClick={open_sidemenu}>
                    <img src={menu} alt="" />
                </span>
                {props.search&&<input type="text" className="search"/>}
                <span className="lock">
                    <img src={lock?lock_closed:lock_open} alt="" onClick={()=>dispatch(authLogout())}/>
                </span>
            </div>
  	)
}

export default TopControls;

