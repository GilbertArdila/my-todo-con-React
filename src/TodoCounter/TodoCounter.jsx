import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter(){
    //usamos el TodoContext para recibir las props
    const {totalTodos,completedTodos}=React.useContext(TodoContext)

    return(
        <h2>Has completado {completedTodos} de {totalTodos} TODO´s</h2>
    );
}

export {TodoCounter};