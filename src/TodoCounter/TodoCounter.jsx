import React from "react";
import './TodoCounter.css';

function TodoCounter({totalTodos,completedTodos,loading,language={language}}){
  
if(language==='spanish'){
     return(
        <h2 className={`TodoCounter ${loading===true && 'TodoCounter--loading'}`}>Has realizado {completedTodos} de {totalTodos} tareas creadas</h2>
    );
}else{
    return(
        <h2 className={`TodoCounter ${loading===true && 'TodoCounter--loading'}`}>You have done {completedTodos} of {totalTodos} taskes</h2>
    );
}
   
}

export {TodoCounter};