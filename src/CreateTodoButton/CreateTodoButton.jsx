import React from "react";
import './CreateTodoButton.css';
import { TodoContext } from "../TodoContext";

function CreateTodoButton(){
    //este setOpenModal lo consumimos del contexto en index.js

  const{setOpenModal}=React.useContext(TodoContext)
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