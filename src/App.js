import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import './App.css';
import { ToDoSearch } from './ToDoSearch';
import { TodoContext } from './Context';
import { TodoProvider } from './Context';
import { ToDoButton } from './ToDoButtom';
import React from 'react';
import { Portal } from './model';
import { ToDoForm } from './ToDoForm';

function App() { 
 /*   const {
    lista,
    searchvalue,
    setLista,  
    searchedTodo,
    deleteTodo,
    setSearchValue,
  } =React.useContext(TodoContext);  */
    
  return ( 
    <TodoProvider>
      <TodoContext.Consumer>
          {({lista,
            searchvalue,
            setLista,  
            searchedTodo,
            deleteTodo,
            setSearchValue,
            openModal,
            setOpenModal,})=>(
      <React.Fragment>
      <ToDoSearch     setSearchValue={setSearchValue }/>
          <ToDoList>
          {searchedTodo.map((todo)=>   
            <ToDoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
            onDelete={()=>deleteTodo(todo.text)} 
            />
          )}
          </ToDoList>
       {
         openModal && (
         <Portal>
           <ToDoForm setOpenModal={setOpenModal}/>
         </Portal>)
       }
        <ToDoButton setOpenModal={setOpenModal} openModal={openModal}></ToDoButton>
      </React.Fragment>
      )}
      </TodoContext.Consumer>
    </TodoProvider>
  );   
 } 
 
export default App;



