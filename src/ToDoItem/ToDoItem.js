import React from "react";
import './ToDoItem.css'
function ToDoItem(props) {
  let checked;
  setTimeout(()=> checked = document.getElementById(`#${props.text}`),
  console.log(checked.value) , 2000 ) 
  
  return (
    <li className='task'>
      <input className='check' type="checkbox"></input>
      <p>{props.text}</p>
      <span className='delete' onClick={props.onDelete}>X</span>
    </li>
  );
}

export { ToDoItem };

