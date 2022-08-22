 import React from 'react';
 import './App.css';
 import { TodoCounter } from '../TodoCounter/TodoCounter';
 import { TodoSearch } from '../TodoSearch/TodoSearch';
 import { TodoList } from '../TodoList/TodoList';
 import { TodoItem } from "../TodoItem/TodoItem";
 import {CreateTodoButton} from '../CreateTodoButton/CreateTodoButton';
import {TodoLoading} from '../TodoLoading/TodoLoading';
import {TodoMessages} from '../TodoMessages/TodoMessages';
import {TodoModal} from'../TodoModal/TodoModal';
import {TodoForm} from '../TodoForm/TodoForm';
import {TodoHeader} from'../TodoHeader/TodoHeader';
import {useTodos} from './useTodos';
import {ChangeAlert} from '../ChangeAlert/ChangeAlert';
 import emptyImg from '../Assets/empty.webp'
 import errorImg from '../Assets/error.webp'
 import notFoundImg from '../Assets/notFound.webp'




function App() {
 
  const {
    loading,
    error,
    searchedTodos,
    completedTodos,

   completeTodo,

    deleteTodo,
    totalTodos,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
 
   
 } = useTodos();
  //capturamos el lenguaje del navegador del cliente
let language;
if(window.clientInformation.language.includes('es')){
  language='spanish'
}else{
  language='english'
}
   
    return(
        <React.Fragment>

        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            loading={loading}
            language={language}
            />

          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
            language={language}
            />
        </TodoHeader>
     
        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}
          


          onError={() => <TodoMessages
            src={errorImg}
            text={`${language==='spanish'&&'¡Upps, parece que tenemos un error!, por favor intenta más tarde'|| 'Sorry, we have an error right now, please retry later'} `}
          />}


          onEmpty={() => <TodoMessages
            src={emptyImg}
            text={`${language==='spanish'&&'Vamos a crear nuestra primer tarea'||'Lets do our first task!!'}`} />}

          onNotFound={() => <TodoMessages
            src={notFoundImg}
            text={`${language==='spanish'&&'Parece que no encontramos lo que estas buscando, por favor verifica tu busqueda'||'There are no coincidences, please check your searching'}`}
          />}

          onLoading={() => <TodoLoading />}

          render={todo => (
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
          )
          }

        />


  {/* si openModal es true se muestra el modal */}
      {openModal===true && (
        <TodoModal>
         <TodoForm
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          language={language}
         />
        </TodoModal>
      )}
      
      <CreateTodoButton
      //enviamos el setOpenModal para poder usarlo en el onClick del botón
       setOpenModal={setOpenModal}
       
      />
      {/* este sincronize esta en localStorage.jsx y lo que hace es recargar la pagina y poner el setSincronizedItem en false para que el useEffect se recargue y  */}
      <ChangeAlert
      sincronize={sincronizeTodos}
      language={language}
      />
    </React.Fragment>
    )
}

export {App};
