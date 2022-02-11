import React, { useState } from 'react';
import './TodoCard.css';

function TodoCard({todo,deleteTodo,id}) {
  const [isChecked, setIsChecked] = useState(false);
  const completed= isChecked ? 'strike' : '';
  return (
    <div className='card'>
      <input type='checkbox' className='checkbox' onChange={(e)=>setIsChecked(prev=>!prev)}/>
      <span className={completed}>{todo}</span>
      <button className='delete' onClick={()=>deleteTodo(id)}>Delete</button>
     </div>
  )
}

export default TodoCard