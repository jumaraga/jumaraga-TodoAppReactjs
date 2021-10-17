import React from "react";
import './ToDoSearch.css'
function ToDoSearch({setSearchValue}){
   function searchTodo(Event){
      const buscador=document.querySelector(`input`).value;
      console.log(buscador);
      return setSearchValue(buscador);
    }
  
 return (
   <input className='search' onChange={()=>searchTodo()} placeholder='Encuentra la que te falta hacer' ></input>
 )
}
export {ToDoSearch}