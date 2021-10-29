import React from "react";
import reactDom from "react-dom";
import './modal.css';
function Portal({children}){   
   return reactDom.createPortal(
      <div className='ModalBackground'>
         {children}
      </div>,
      document.getElementById('modal')
   )
}
export {Portal}