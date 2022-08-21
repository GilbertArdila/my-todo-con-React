import React from "react";
import {useStorageListener} from './useStorageListener'
import './ChangeAlert.css'
//lo recibimos de App.jsx
function ChangeAlert({sincronize}){
   //llamamos las propiedades desde el customHook
    const {show,toggleShow}=useStorageListener(sincronize);

    if(show){
        return (
            <div className="changeAlert-container">
                <div className="changeAlert-container--up"></div>
                <div className="changeAlert-container--down">
                    <p className="changeAlert-container__text">Hay cambios que pueden modificar la información que estas viendo</p>
                    <button
                        className="changeAlert-container__button"
                        //cambiamos el setStorageChange
                        onClick={() => toggleShow(false)}
                    >Recargar</button></div>

            </div>
           
        )
}
else{
    return null;
}
    }
    


export{ChangeAlert}