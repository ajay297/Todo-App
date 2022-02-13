import React, { useState } from 'react';
import './TodoCard.css';

function TodoCard({todo,deleteTodo,id,currentView,dateAndTime}) {
  const [isChecked, setIsChecked] = useState(false);
  const completed= isChecked ? 'strike' : '';
  return (
    <div className='card'>
      <div className='card-header'>
        <input type='checkbox' className='checkbox' onChange={(e)=>setIsChecked(prev=>!prev)}/>
        <span className={completed}>{todo}</span>
        <button className='delete' onClick={()=>deleteTodo(id,currentView)}>Delete</button>
      </div>
      <div className='card-footer'>
        {dateAndTime.toLocaleString()}
      </div>
     </div>
  )
}

export default TodoCard