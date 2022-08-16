import React from "react";
import './TodoEmpty.css';

function TodoEmpty(){
    return(
        <div className="TodoEmpty-container">
            <img src="https://img.freepik.com/vector-gratis/bombilla-realista_1284-4662.jpg?w=740&t=st=1660146863~exp=1660147463~hmac=80f06fd8b35565765bf8021ef3fd2191edffb09428d7e1afb9923d456fae39a3"/>
            <h3>Vamos a crear nuestro primer TODO</h3>
        </div>
    );
}
export{TodoEmpty};