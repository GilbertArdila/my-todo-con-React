import React from "react";


function TodoIcon({class_name,icon,completed,second_class,onClick}){
    return(
        <span className={`${class_name} ${completed && second_class}`}
        onClick={onClick} >{icon}</span>
    );
}

export{TodoIcon};