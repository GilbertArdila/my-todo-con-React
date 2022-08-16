import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
function TodoSearch(){
  
   //usamos el TodoContext para recibir las props
const{searchValue,setSearchValue}=React.useContext(TodoContext);

    /**creamos el listener para capturar el value del input */
    const onSearchValueChange=(event)=>{
      const searchValue=event.target.value
      //asignamos el nuevo valor al estado, lo que está en el value del input
      setSearchValue(searchValue);
    }

    return(
        <input
         placeholder='Buscar'
        //  le pasamos como valor el estado con el searchValue
         value={searchValue}
        onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};