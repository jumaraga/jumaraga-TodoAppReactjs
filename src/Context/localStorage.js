import React from "react";

function useLocalStorage(newvalue){
   let item = JSON.parse(localStorage.getItem('TODO_V1'));
   let textStringtify;
   let prevState;

   item? prevState= item
   :prevState=[];
   localStorage.setItem('TODO_V1',JSON.stringify(prevState))

   const saveLocalStorage=(item)=>{
      textStringtify= JSON.stringify(item);
      localStorage.setItem('TODO_V1',textStringtify);
   }
   
   return(
      saveLocalStorage,
      prevState
   ); 
}

export {useLocalStorage}