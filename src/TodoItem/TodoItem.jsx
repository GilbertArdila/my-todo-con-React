import React from "react";
import { TodoIcon } from "../TodoIcons/TodoIcon";
import './TodoItem.css'
// estas propiedades se las estamos enviando en App.js
function TodoItem({text,id,date,completed,completedDate,onComplete,onDelete}){

       
    return(

       
        <li className="todoItem-li">
            
           
            <TodoIcon
            class_name='todoItem-li__span'
            icon='✔'
            completed={completed}
            second_class='checked'
            onClick={onComplete}
            />
            
            <p  className="todoItem-li__p id">Id:{id}</p>

            <p  className={`todoItem-li__p text ${completed && 'checkedText'}`}
            >Tarea: {text}</p>
            
            <p  className="todoItem-li__p date">Fecha de creación: {date}</p>
              {/* esta propiedad por defecto está vacía pero al marcar como completa la tarea se le pasará la fecha */}
            <p className="todoItem-li__p endDate">{completedDate}</p>

            {/* le enviamos el completed en true por defecto para que tome la clase delete siempre */}
            <TodoIcon
            class_name='todoItem-li__span'
            icon='✖'
            completed={true}
            second_class='delete'
            onClick={onDelete}
            />

        </li>
    );
}
export {TodoItem};