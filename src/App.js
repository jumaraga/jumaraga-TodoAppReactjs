import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import './App.css';
import { ToDoSearch } from './ToDoSearch';
import React from 'react';
const todos =[
  {text:' hola',completed: false },
  {text:' gua',completed: false },
  {text:'miau',completed: false },
]
function App() {
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
 
   return ( 
   <React.Fragment>
    <ToDoList>
        <ToDoSearch   setSearchValue={setSearchValue}   />
        {searchedTodo.map((todo)=>   
          <ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onDelete={()=>deleteTodo(todo.text)} 
          />
          )}  
      </ToDoList>
    </React.Fragment>
  );   
 } 
 
export default App;



