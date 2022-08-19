import React from "react";
import {withStorageListener} from './withStorageListener'
import './ChangeAlert.css'
//recibe los parametros cuando lo llamamos como wrappedComponent
function ChangeAlert({show,toggleShow}){
    if(show){
        return (
            <div className="changeAlert-container">
                 <p className="changeAlert-container__text">Hay cambios que pueden modificar la información que estas viendo</p>
            <button
            className="changeAlert-container__button"
            //cambiamos el setStorageChange
             onClick={()=>toggleShow(false)}
            >Recargar</button>
            </div>
           
        )
}
else{
    return null;
}
    }
    
//aplicamos el HOC y le pasamos el changeAlert
const ChangeAlertWithStorageListener=withStorageListener(ChangeAlert)

export{ChangeAlertWithStorageListener}