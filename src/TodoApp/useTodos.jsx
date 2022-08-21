import React from "react";
import {useLocalStorage} from './useLocalStorage';



function useTodos(){

     //usamos la función para  localStorage y le pasamos por parámetro el nombre del item y el estado inicial, por defecto un array vacío y así creamos el estado para los todos. El item que nos devuelve la función son los todos el saveItem son los saveTodos que consumimos en este provider
  const {item:todos,
    saveItem:saveTodos,
    loading,
  error,
  sincronize:sincronizeTodos
}=useLocalStorage('TODOS_V1',[]);



  /**creamos estado para el search  con un valor inical de vacío y tambien para el modal con estado inicial de false para que no se muestre*/
const [searchValue,setSearchValue]=React.useState("");
const [openModal,setOpenModal]=React.useState(false);
  /**contamos los todos y los todos completados */
const completedTodos=todos.filter(todo=>todo.completed===true).length;
const totalTodos=todos.length;


/**creamos array para filtrar la busqueda en el searcher */
let searchedTodos=[];

/**verificamos el buscador si está vacío searchedTodos=estado inicial de los todos, si no está vacío convertimos todo a minusculas y filtramos lo que el usuario escriba en el input y lo retornamos */
if(!searchValue.length>=1){
  searchedTodos=todos
}else{
  searchedTodos=todos.filter(todo=>{
    //convertimos todo a minusculas para hacer la comparacion
    const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    //retornamos el resultado de la busqueda
    return todoText.includes(searchText)
  })
}

/**creamos las funciones para marcar como completados o borrar los todos recibimos como parametro el texto del todo clicado*/

const completeTodo=(texto)=>{
  //capturamos la fecha de marcación y la pasamos a Json para hacer un split
  let completeDate=new Date
  completeDate=completeDate.toJSON().split('T')[0]
  
  //creamos copia del array de todos para actualizar el estado
  const newTodos=[...todos]
  //encontramos el index de ese todo
   const todoIndex=todos.findIndex(todo=>todo.text===texto);
   //cambiamos el completed de ese todo a true y pasamos la fecha actual a la propiedad completedDate del todo
   newTodos[todoIndex].completed=true;
   newTodos[todoIndex].completedDate=`Fecha de finalización ${completeDate}`
   //actualizamos el estado con el nuevo array
   saveTodos(newTodos);

}
const deleteTodo=(texto)=>{
   //creamos copia del array de todos para actualizar el estado
   const newTodos=[...todos]
   //encontramos el index de ese todo
    const todoIndex=todos.findIndex(todo=>todo.text===texto);
    //borramos el todo
    newTodos.splice(todoIndex,1)
    //actualizamos el estado con el nuevo array
    saveTodos(newTodos);

}

const addTodo=(text)=>{
  //capturamos la fecha decreación del TODO y la pasamos a Json para hacer un split
  let date=new Date
  date=date.toJSON().split('T')[0]
  //capturamos el id del último TODO para crear un id autoincrementable
  let id;
  if(todos.length>0){
     const index=todos.length-1;
   id=(todos[index].id)+1
  }else{
     id=1;
  }
 
  
  //creamos copia del array de todos para actualizar el estado
  const newTodos=[...todos]
  
   //cambiamos el completed de ese todo a true y pasamos la fecha actual a la propiedad completedDate del todo
   newTodos.push({
     completed:false,
     date,
     text,
     completedDate:'',
     id
     
   })
   //actualizamos el estado con el nuevo array
   saveTodos(newTodos);
  

}

 return{
  totalTodos,
  completedTodos,
  addTodo,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
  openModal,
  setOpenModal,
  sincronizeTodos
 };
}

export{useTodos}