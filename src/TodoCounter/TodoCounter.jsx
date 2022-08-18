import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos,completedTodos,loading}){
  

    return(
        <h2 className={`TodoCounter ${loading===true && 'TodoCounter--loading'}`}>Has completado {completedTodos} de {totalTodos} TODO´s</h2>
    );
}

export {TodoCounter};