import React from "react";

function useLocalStorage(itemName,initialValue){

  /**creando estados***********************************/
  const [item,setItem]=React.useState(initialValue);
  const [loading,setLoading]=React.useState(true)
  const [error,setError]=React.useState(false)
  const [sincronizedItem,setSincronizedItem]=React.useState(true)
/********************************************************* */

//creamos un useEffect y simulamos un retraso***************
   React.useEffect(()=>{
      setTimeout(()=>{
        try {
          //llamamos localStorage para la persistencia de datos
  const localStorageItem=localStorage.getItem(itemName);
   
  //verificamos si el localStorage está vacío
  let parsedItem;

  if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue))
      parsedItem=initialValue;
  }else{
    //parseamos los todos para poderm pasarlos a localStorage
    parsedItem=JSON.parse(localStorageItem) 
  }
  //cambiamos el estado del item por el parsedItem y el estado del loading a false
  setItem(parsedItem);
  setLoading(false)
  setSincronizedItem(true)
        } catch (error) {
          setError(true) 
        }
  
      },1000)
   },[sincronizedItem])

  
   
    
   
    /**creando funcion paraguardar en el local storage los todos y tambien actualizamos el estado de los todos */
   const saveItem=(newItem)=>{
    try{
       const stringifiedItem=JSON.stringify(newItem);
     localStorage.setItem(itemName,stringifiedItem);
     setItem(newItem);
    }catch(error){
      setError(true)
    }
    
   }
   
   //función para vigilar la sincronización de los cambios
   const sincronize=()=>{
     setLoading(true)
     setSincronizedItem(false)
   }
   return {
     item,
     saveItem,
     loading,
     error,
     sincronize
   }
   
   }
   export {useLocalStorage}