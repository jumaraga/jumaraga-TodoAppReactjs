import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import './App.css';
import { ToDoSearch } from './ToDoSearch';
import { TodoContext } from './Context';
import { TodoProvider } from './Context';
import React from 'react';

function App() { 
/*   const {
    lista,
    searchvalue,
    setLista,  
    searchedTodo,
    deleteTodo,
    setSearchValue,
  } =React.useContext(TodoContext); */
  
  return ( 
    <TodoProvider>
      <React.Fragment>
      <ToDoSearch    /* setSearchValue={setSearchValue }*//>
          <TodoContext.Consumer>
          {({lista,
            searchvalue,
            setLista,  
            searchedTodo,
            deleteTodo,
            setSearchValue,})=>(<ToDoList>
          {searchedTodo.map((todo)=>   
            <ToDoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onDelete={()=>deleteTodo(todo.text)} 
            />
          )}
          </ToDoList>
          )}
          </TodoContext.Consumer>
      </React.Fragment>
    </TodoProvider>
  );   
 } 
 
export default App;



