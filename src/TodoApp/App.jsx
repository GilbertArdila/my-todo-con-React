 import React from 'react';
 import './App.css';
 import { TodoCounter } from '../TodoCounter/TodoCounter';
 import { TodoSearch } from '../TodoSearch/TodoSearch';
 import { TodoList } from '../TodoList/TodoList';
 import { TodoItem } from "../TodoItem/TodoItem";
 import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoLoading} from '../TodoLoading/TodoLoading';
import {TodoEmpty} from '../TodoEmpty/TodoEmpty';
import { TodoError } from '../TodoError/TodoError';
import {TodoNotFound} from '../TodoNotFound/TodoNotFound';
import {TodoModal} from'../TodoModal/TodoModal';
import {TodoForm} from '../TodoForm/TodoForm';
import {TodoHeader} from'../TodoHeader/TodoHeader';
import {useTodos} from './useTodos';

 




function App() {
 
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    totalTodos,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    addTodo
   
 } = useTodos();
 
    return(
        <React.Fragment>
        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completeTodo={completeTodo} />

          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue} />
        </TodoHeader>
     


      <TodoList>

        {error && <TodoError />}
        {loading && <TodoLoading></TodoLoading>}
        {(!loading && totalTodos === 0  ) && <TodoEmpty />}
        {(!loading && searchedTodos.length===0 && totalTodos>0) && <TodoNotFound />}
        
        { }
        {/* para que esto sea leido le enviamos props.children en TodoItem.js */}

        {/* hacemos un map de los searchedTodos para mostrarlos */}
        {searchedTodos.map(todo => (
          <TodoItem
            //enviamos las props al item
            text={todo.text}
            id={todo.id}
            date={todo.date}
            completed={todo.completed}
            completedDate={todo.completedDate}
            key={todo.id}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}

          />
        ))}
      </TodoList>

  {/* si openModal es true se muestra el modal */}
      {openModal===true && (
        <TodoModal>
         <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
         />
        </TodoModal>
      )}
      
      <CreateTodoButton
      //enviamos el setOpenModal para poder usarlo en el onClick del botón
       setOpenModal={setOpenModal}
      />

    </React.Fragment>
    )
}

export {App};
