import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}){
    //este setOpenModal lo consumimos del contexto en index.js

 
    const onClickButton=()=>{
      //esto es un toggle
        setOpenModal(prevState=>!prevState)
      }


    return(
        <button className="create_todoButton"
        onClick={()=>onClickButton()}>+</button>
    );
}
export{CreateTodoButton};