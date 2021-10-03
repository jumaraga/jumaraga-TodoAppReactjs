import React from "react";

const TodoContext = React.useContext();

function TodoProvider(props){
   return(
      <TodoContext.TodoProvider value={{
         
      }}>
         {props.childrem}
      </TodoContext.TodoProvider>
   )
}
export {TodoProvider}