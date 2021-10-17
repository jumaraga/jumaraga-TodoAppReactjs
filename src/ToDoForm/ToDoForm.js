import React from "react";
import { TodoContext } from "../Contex/Context";

function ToDoForm(){
   const {saveAdd,setOpenModal} = React.useContext(TodoContext);
   const [newToDoValue,setNewToDoValue]= React.useState()
   const onCancel=()=>{
      setOpenModal(false)
   }
   const onAdd=(event)=>{
      try{
         event.preventDefault();
         saveAdd({text:newToDoValue,completed:false });
         setOpenModal(false)
      } catch(e){
         console.error(e);
      }
      
   }
   
   const onchange=(event)=>{
      setNewToDoValue(event.target.value);
      console.log(event.target.value);
   }
   return(  
      <form onSubmit={onAdd}>
         <label>Escribe tu nuevo to-do</label>
         <textarea 
         value={newToDoValue} 
         placeholder='cortar la cebolla para el almuerzo'  
         onChange={onchange}></textarea>
         <div>
            <button type='button' onClick={()=>onCancel()}>
               Cancelar
            </button>
            <button type='button' onClick={onAdd}>
               Añadir
            </button>
         </div>
      </form>
   )
}
export {ToDoForm}