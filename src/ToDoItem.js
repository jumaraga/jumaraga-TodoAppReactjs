import React from "react";

function ToDoItem(props) {
  return (
    <li>
      <input type="checkbox"></input>
      <p>{props.text}</p>
      <span onClick={props.onDelete}>X</span>
    </li>
  );
}

export { ToDoItem };

