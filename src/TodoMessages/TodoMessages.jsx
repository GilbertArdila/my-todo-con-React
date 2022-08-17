import React from "react";
import './TodoMessages.css';

function TodoMessages({src,text}){
    return(
        <div className="TodoEmpty-container">
            <img src={src}/>
            <h3>{text}</h3>
        </div>
    );
}
export{TodoMessages};