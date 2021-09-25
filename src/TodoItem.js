 function TodoItem(props){
     const identificador=props.text
   
   function oncompleted() {
      // si simplemente colocamos let checked = document.querySelector(`#${identificador}`) no consiederará inizilisada la variable checked 
      let checked = document.querySelector(`#${identificador}`).checked;
      (checked)? document.querySelector(`#${identificador}hola`).innerHTML='es verdad que esta en check'
      :document.querySelector(`#${identificador}hola`).innerHTML='es falso que esta en check'
   }
   return(
      <li>
         <input id={props.text}  type='checkbox' onClick={()=>oncompleted()} /> 
         <p id={`${props.text}hola`} className={`${props.completed && 'completed'}`}>{props.text}</p>
      </li>      
   )
}
export default  TodoItem