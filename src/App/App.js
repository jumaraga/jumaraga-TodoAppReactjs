import { ToDoList } from '../ToDoList/ToDoList';
import { ToDoItem } from '../ToDoItem/ToDoItem';
import './App.css';
import { ToDoSearch } from '../ToDoSearch/ToDoSearch';
import { TodoContext } from '../Contex/Context';
import { TodoProvider } from '../Contex/Context';
import { ToDoButton } from '../ToDoButton/ToDoButtom';
import React from 'react';
import { Portal } from '../model';
import {ToDoForm} from '../ToDoForm/ToDoForm' 

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
      <React.Fragment classname='App' >
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



