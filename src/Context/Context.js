import React, { useLayoutEffect } from "react";
import { useLocalStorage } from "./localStorage";
const TodoContext = React.createContext();

function TodoProvider(props){
   const todos =[
      {text:' hola',completed: false },
      {text:' gua',completed: false },
      {text:'miau',completed: false },
    ]
   const [lista, setLista]=React.useState(todos);
   const [searchvalue, setSearchValue]= React.useState('');
   const [openModal, setOpenModal]= React.useState(false);
   const {saveLocalStorage,prevState}=useLocalStorage('');
   let searchedTodo= [];
 
   (!searchvalue.length>=1)
   ?searchedTodo=lista
   :searchedTodo = lista.filter(
     todo=>{
     const todoText =todo.text.toLowerCase();
     const searchvalueLower= searchvalue.toLowerCase();
      return todoText.includes(searchvalueLower)
     })
   const deleteTodo = (text) => {
     const todoIndex = lista.findIndex(todo => todo.text === text);
     const newTodos = [...lista];
     newTodos.splice(todoIndex, 1);
     setLista(newTodos);
   }; 
   const saveAdd = (text) => {
      const newTodos = [...lista];
      newTodos.push(text);
      setLista(newTodos);
      saveLocalStorage(newTodos);
    }; 
   function oncompleted(item) {
      // si simplemente colocamos let checked = document.querySelector(`#${identificador}`) no consiederará inizilisada la variable checked 
      let checked = document.getElementById(`${item}`).checked;
      const newTodos=[...lista] 
      const index= newTodos.findIndex(todo=>todo.text===item);
      (checked)? newTodos[index].completed= true
      :newTodos[index].completed= false
      setLista(newTodos)
   }

   
   return(
      <TodoContext.Provider value={{
            lista,
            searchvalue,
            setLista,
            searchedTodo,
            deleteTodo,
            setSearchValue,
            setOpenModal,
            openModal,
            saveAdd,
            oncompleted,
      }}>
         {props.children}
      </TodoContext.Provider>
   )
}
export { TodoContext,TodoProvider}