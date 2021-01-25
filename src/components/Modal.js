import React from 'react';

const Modal = (props) => {
 

  return (
  	<>
  	{
  	props.show&&
  	<>	
	  	<div className="modal-over" onClick={()=>props.setShow(false)}>
	  	</div>
		<div className="modal">
	    	{props.children}
	    </div>
    </>
    }
    </>
  )
}

export default Modal;