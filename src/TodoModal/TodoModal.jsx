import React from "react";
import  ReactDOM  from "react-dom";
import './TodoModal.css';

function TodoModal({children}){
    return ReactDOM.createPortal(
        <div className="TodoModal-container ">
          <h2>Crear un nuevo todo</h2>
          {children}  
        </div>,
       document.getElementById("modal")
    );
}
export{TodoModal}

