import React, { useContext, useState } from 'react';
import { FaTrash,FaPen } from "react-icons/fa";
import { TodoContext } from '../../App';
import './TodoCard.css';

function TodoCard({todo,id,dateAndTime}) {
  const [isChecked, setIsChecked] = useState(false);
  const completed= isChecked ? 'strike' : '';
   const {editTodo,deleteTodo,currentView} = useContext(TodoContext);
  return (
    <div className='card'>
      <div className='card-header'>
        <input type='checkbox' className='checkbox' onChange={(e)=>setIsChecked(prev=>!prev)}/>
        <div className={completed}>{todo}</div>
        {/* <button className='delete' onClick={()=>deleteTodo(id,currentView)}>Delete</button> */}
        <div className='icon-container'>
          <FaPen className='pen' onClick={()=>editTodo(id,"Ajay",currentView)}/>
          <FaTrash className='delete' onClick={()=>deleteTodo(id,currentView)}/>
        </div>
        
      </div>
      <div className='card-footer'>
        {dateAndTime.toLocaleString()}
      </div>
     </div>
  )
}

export default TodoCard