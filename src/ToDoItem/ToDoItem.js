import React from "react";
import { TodoContext } from "../Context/Context.js";
import './ToDoItem.css'
function ToDoItem(props) {
  const {oncompleted}=React.useContext(TodoContext);
  const identificador=props.text;
  
 
  
  return (
    <li className='task'>
      <input id={props.text} className='check' type="checkbox" onClick={()=>oncompleted(identificador)}></input>
      <p id={`${props.text}hola`} className={`${props.completed && 'completed'}`}>{props.text}</p>
      <span className='delete' onClick={props.onDelete}>X</span>
    </li>
  );
}

export { ToDoItem };

