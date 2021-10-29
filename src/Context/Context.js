import React from "react";
import { useLocalStorage } from "./localStorage";
const TodoContext = React.createContext();

function TodoProvider(props){
   const [searchvalue, setSearchValue]= React.useState('');
   const [openModal, setOpenModal]= React.useState(false);
   const {item,
      saveItem: saveLocalStorage,
      loading,
      error,}=useLocalStorage('TODOS_V1',[]);
   let searchedTodo= [];
 
   (!searchvalue.length>=1)
   ?searchedTodo=item
   :searchedTodo = item.filter(
     todo=>{
     const todoText =todo.text.toLowerCase();
     const searchvalueLower= searchvalue.toLowerCase();
      return todoText.includes(searchvalueLower)
     })
   const deleteTodo = (text) => {
     const todoIndex = item.findIndex(todo => todo.text === text);
     const newTodos = [...item];
     newTodos.splice(todoIndex, 1);
     saveLocalStorage(newTodos);
   }; 
   const saveAdd = (text) => {
      const newTodos = [...item];
      newTodos.push(text);
      saveLocalStorage(newTodos);
    }; 
   function oncompleted(identificador) {
      // si simplemente colocamos let checked = document.querySelector(`#${identificador}`) no consiederará inizilisada la variable checked 
      let checked = document.getElementById(`${identificador}`).checked;
      const newTodos=[...item] 
      const index= newTodos.findIndex(todo=>todo.text===identificador);
      (checked)? newTodos[index].completed= true
      :newTodos[index].completed= false;
      saveLocalStorage(newTodos)
   }

   
   return(
      <TodoContext.Provider value={{
            item,
            loading,
            error,
            searchvalue,
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