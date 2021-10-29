import React from "react";
import './ToDoButton.css'

function ToDoButton(props){
   const onClick=()=>{
      /* PRIMERA FORMA
      (props.openModal)
      ?props.setOpenModal(false)
      :props.setOpenModal(true) */

      //uso del prevState
      props.setOpenModal( prevState=>!prevState)
   }

   return(
      <button className='create_button' type='button' onClick={()=>{onClick()}}>
         +
      </button>
   )
}
export {ToDoButton}