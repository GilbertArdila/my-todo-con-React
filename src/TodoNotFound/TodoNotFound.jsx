import React from "react";
import './TodoNotFound.css'


function TodoNotFound(){
    return(
        <div className="TodoNotFound-container">
            <img src="https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=740&t=st=1660147774~exp=1660148374~hmac=f93315c60d8ae0582443b30f4ae570ba3fe09deab1bcf1b2071517f575db1764"/>
            <h3>Vaya! parece que no hay coincidencias</h3>
        </div>
    );
}
export {TodoNotFound};