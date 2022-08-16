import React from "react";
import './TodoError.css'


function TodoError(){
    return(
        <div className="TodoError-container">
            <img src="https://img.freepik.com/vector-gratis/ilustracion-vectorial-diseno-grafico_24908-54512.jpg?w=740&t=st=1660147323~exp=1660147923~hmac=9f4d0db5f954045fddb3b230e031b252212759d68b25bba3149a74123680a008"/>
            <h3>Upps!! parece que tenemos problemas, intenta de nuevo más tarde</h3>
        </div>
    );
}
export {TodoError};