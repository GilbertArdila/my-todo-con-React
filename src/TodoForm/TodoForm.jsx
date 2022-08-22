import React from "react";
import './TodoForm.css';

function TodoForm({addTodo,setOpenModal,language}){
    //creamos estado para el textArea para capturar el value
const[newTodoValue,setNewTodoValue]=React.useState("");
//usamos el contexto

    const onCancel=()=>{
        //cerramos el modal
        setOpenModal(false);
        //limpiamos el formulario
        setNewTodoValue('')

    }
   //cada vez que cambie el estado del textArea
    const onChange=(event)=>{
        setNewTodoValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //llamamos el addTodo y le enviamos el texto
        addTodo(newTodoValue)
        //cerramos el modal
        setOpenModal(false);

    }
    //creamos variables para el texto de los botónes
    let Crear;
    let Cerrar;
    if(language==='spanish'){
        Crear='Crear'
        Cerrar='Cerrar'
    }else{
        Crear='Create'
        Cerrar='Close'
    }
    return(
        <form className="TodoForm-container" 
        onSubmit={onSubmit}
        >

           <label>Nuevo TODO</label>

           <textarea 
           value={newTodoValue}
           onChange={onChange}
           placeholder={`${language==='spanish'&&"Escribe aquí..."|| 'Text here...'}`}
           className="TodoForm-container__text"/>

           <div className="TodoForm-container__buttonsContainer">

               <button className="createButton button" type="submit"
               >{Crear}</button>

               <button className="closeButton button" type="button"
                onClick={()=>onCancel()}>{Cerrar}</button>

           </div>
        </form>
    );
}

export{TodoForm};