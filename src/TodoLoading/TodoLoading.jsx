import React from 'react';
import './TodoLoading.css'

function TodoLoading(){
    return(
        <div className='TodoLoading-container'>
              <div className='TodoLoading-container__fakeTodo'></div>
              <div className='TodoLoading-container__loader one'></div>
              <div className='TodoLoading-container__loader two'></div>
              <div className='TodoLoading-container__loader three'></div>
              <div className='TodoLoading-container__loader four'></div>
              <div className='TodoLoading-container__loader five'></div>
              
              

        </div>
    );
}

export{TodoLoading}