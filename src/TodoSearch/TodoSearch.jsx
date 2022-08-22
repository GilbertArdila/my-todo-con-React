import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue,setSearchValue,loading,language}){
  
   

    /**creamos el listener para capturar el value del input */
    const onSearchValueChange=(event)=>{
      const searchValue=event.target.value
      //asignamos el nuevo valor al estado, lo que está en el value del input
      setSearchValue(searchValue);
    }

    return(
        <input
        
         placeholder={`${language==='spanish' && 'Buscar' || 'Search'}`}
        //  le pasamos como valor el estado con el searchValue
         value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}/>
    );
}

export {TodoSearch};