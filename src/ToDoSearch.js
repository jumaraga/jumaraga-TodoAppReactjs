import React from "react";

function ToDoSearch({setSearchValue}){
   function searchTodo(Event){
      const buscador=document.querySelector(`input`).value;
      console.log(buscador);
      return setSearchValue(buscador);
    }
  
 return (
   <input onChange={()=>searchTodo()}></input>
 )
}
export {ToDoSearch}