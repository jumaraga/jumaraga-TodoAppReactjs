import '/home/josue/pruebas/src/ToDoList/ToDoList.css'
function ToDoList(props){
   return(
      <section>
      <ul>
         {props.children}
      </ul>
      </section>
   )
}
export {ToDoList}