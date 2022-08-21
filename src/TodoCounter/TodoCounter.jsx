import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos,completedTodos,loading}){
  

    return(
        <h2 className={`TodoCounter ${loading===true && 'TodoCounter--loading'}`}>Has realizado {completedTodos} de {totalTodos} tareas creadas</h2>
    );
}

export {TodoCounter};