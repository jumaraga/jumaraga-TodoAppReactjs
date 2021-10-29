import './ToDoCounter.css'
import { TodoContext } from '../Context/Context'
import React from 'react'
function ToDoCounter(){
   const{item}=React.useContext(TodoContext);
   let completados;
   completados=item.filter(
     todo=> todo.completed === true
   )
   const todos= item.length

   
   return(
   <>
     <h1 className='first-titule'>
        What's up <span>👋</span>
     </h1>
     <h3 className='second-titule'>Has completado {completados.length} tares de {todos}</h3> 
     </>
   );
}
export {ToDoCounter}