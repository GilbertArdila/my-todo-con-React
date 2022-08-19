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
 




function App() {
 
  const {
    loading,
    error,
    searchedTodos,
    completedTodos,
    deleteTodo,
    totalTodos,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos
   
 } = useTodos();
 
    return(
        <React.Fragment>

        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            loading={loading}
            />

          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
            />
        </TodoHeader>
     
        <TodoList
          error={error}
          loading={loading}
          totalTodos={totalTodos}
          searchedTodos={searchedTodos}


          onError={() => <TodoMessages
            src={'https://img.freepik.com/vector-gratis/ilustracion-vectorial-diseno-grafico_24908-54512.jpg?w=740&t=st=1660147323~exp=1660147923~hmac=9f4d0db5f954045fddb3b230e031b252212759d68b25bba3149a74123680a008'}
            text={'¡Upps, parece que tenemos un error!, por favor intenta más tarde'}
          />}


          onEmpty={() => <TodoMessages
            src={'https://img.freepik.com/vector-gratis/bombilla-realista_1284-4662.jpg?w=740&t=st=1660146863~exp=1660147463~hmac=80f06fd8b35565765bf8021ef3fd2191edffb09428d7e1afb9923d456fae39a3'}
            text={'Vamos a crear nuestra primer tarea'} />}

          onNotFound={() => <TodoMessages
            src={'https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=740&t=st=1660147774~exp=1660148374~hmac=f93315c60d8ae0582443b30f4ae570ba3fe09deab1bcf1b2071517f575db1764'}
            text={'Parece que no encontramos lo que estas buscando, por favor verifica tu busqueda'}
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
         />
        </TodoModal>
      )}
      
      <CreateTodoButton
      //enviamos el setOpenModal para poder usarlo en el onClick del botón
       setOpenModal={setOpenModal}
      />
      <ChangeAlert
      sincronize={sincronizeTodos}
      />
    </React.Fragment>
    )
}

export {App};
