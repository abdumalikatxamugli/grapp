import React, { useState } from "react";
import customArrow from "../assets/images/arrow.svg";
const UnvisibleFormElements = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="UnvisibleFormElements">
            <span className="toggler" onClick={() => setIsOpen(!isOpen)}><img className={isOpen ? 'visible' : 'unvisible'} src={customArrow} /> {props.label}</span>
            <div className={isOpen ? `content` : `content visible`}>
                {props.children}
            </div>
        </div>

    )
}
export default UnvisibleFormElements;