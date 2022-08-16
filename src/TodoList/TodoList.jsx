import React from "react";
import './TodoList.css'

function TodoList(props){
    return(
       <section className="todoList-section">
        <ul className="todoList-section__ul">
            {/* este children son las props que le enviamos en App.js los todos */}
            {props.children}
        </ul>
       </section> 
        
    );
}
export {TodoList};