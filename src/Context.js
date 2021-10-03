import React from "react";

const TodoContext = React.createContext();

function TodoProvider(props){
   const todos =[
      {text:' hola',completed: false },
      {text:' gua',completed: false },
      {text:'miau',completed: false },
    ]
   const [lista, setLista]=React.useState(todos);
   const [searchvalue, setSearchValue]= React.useState('')
   
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
   
   return(
      <TodoContext.Provider value={{
            lista,
            searchvalue,
            setLista,
            searchedTodo,
            deleteTodo,
            setSearchValue,
      }}>
         {props.children}
      </TodoContext.Provider>
   )
}
export { TodoContext,TodoProvider}