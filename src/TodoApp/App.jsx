 import React from 'react';
 import './App.css';

import {TodoProvider}from '../TodoContext/index';
import {AppUI} from'./AppUI';

 




function App() {
 
  return (
   

    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>

  );
}

export {App};
