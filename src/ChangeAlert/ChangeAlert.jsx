import React from "react";
import {useStorageListener} from './useStorageListener'
import './ChangeAlert.css'
//lo recibimos de App.jsx
function ChangeAlert({sincronize,language}){
   //llamamos las propiedades desde el customHook
    const {show,toggleShow}=useStorageListener(sincronize);
    let Recargar;
    if(language==='spanish'){
        Recargar='Recargar'
    }else{
        Recargar='Reload'
    }
    if(show){
        return (
            <div className="changeAlert-container">
                <div className="changeAlert-container--up"></div>
                <div className="changeAlert-container--down">
                    <p className="changeAlert-container__text">{`${language==='spanish'&& 'Hay cambios que pueden modificar la información que estas viendo'||'The information that you are watching has change'}`}</p>
                    <button
                        className="changeAlert-container__button"
                        //cambiamos el setStorageChange
                        onClick={() => toggleShow(false)}
                    >{Recargar}</button></div>

            </div>
           
        )
}
else{
    return null;
}
    }
    


export{ChangeAlert}