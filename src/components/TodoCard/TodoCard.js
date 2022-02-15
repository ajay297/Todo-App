import React, {useState } from 'react';
import { FaTrash,FaPen, FaCheckCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/action';
import './TodoCard.css';

function TodoCard({todo,id,dateAndTime,currentView}) {
  const [isChecked, setIsChecked] = useState(false);

  const [text, setText] = useState(todo);
  
  const [editMode, setEditMode] = useState(false);
  const completed= isChecked ? 'strike' : '';
  // const {editTodo,deleteTodo,currentView} = useContext(TodoContext);

  const dispatch=useDispatch();
  
  
   return (
    <div className='card'>
      <div className='card-header'>
        <input type='checkbox' className='checkbox' onChange={(e)=>setIsChecked(prev=>!prev)}/>
        <div className={completed}>
          {
            editMode ?  
            <input 
            type='text' 
            className="todo-edit" 
            value={text} 
            onChange={(e)=>setText(e.target.value)} 
            /> : 
            <span>{todo}</span>
          }
          </div>
        <div className='icon-container'>
            {
              editMode ? 
              <FaCheckCircle 
              className='pen' 
              onClick={()=>{
                if(!text)
                return;

                dispatch(editTodo(id,text,currentView));
                setEditMode(false);
              }}/> 
              :
              
              <FaPen className='pen' onClick={()=>{
                setEditMode(true);
              }}/>
            }
          <FaTrash className='delete' onClick={()=>dispatch(deleteTodo(id,currentView))}/>
        </div>
        
      </div>
      <div className='card-footer'>
        {dateAndTime.toLocaleString()}
      </div>
     </div>
  )
}

export default TodoCard