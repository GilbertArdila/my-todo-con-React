import React from "react";
import './TodoList.css'

function TodoList({error,onError,loading,onLoading,totalTodos,onEmpty,searchedTodos,onNotFound,render,children}){
    return(
       <section className="todoList-section">
         {error && onError()}
         {loading && onLoading()}
         {(!loading && totalTodos === 0) && onEmpty()}
         {(!loading && searchedTodos.length===0 && totalTodos>0)&& onNotFound()}
         {searchedTodos.map(todo=>render(todo))}
        <ul className="todoList-section__ul">
            {/* este children son las props que le enviamos en App.js los todos */}
            {children}
        </ul>
       </section> 
        
    );
}
export {TodoList};