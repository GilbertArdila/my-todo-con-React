import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
function TodoSearch({searchValue,setSearchValue}){
  
   

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