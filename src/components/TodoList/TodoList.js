import React, { useState,useContext } from 'react'
import { useSelector } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import './TodoList.css';



function TodoList({currentView}) {

    const todos=useSelector(state=>state.todos);

    const todoList=todos[currentView];

  return (
    <div>
        <TodoForm currentView={currentView}/>
        <div className='card-container'>
        {
            todoList?.map(ele=>(
                 <TodoCard key={ele.id} todo={ele.value} id={ele.id} dateAndTime={ele.dateAndTime} currentView={currentView}/>
            ))
        }
        </div>
    </div>
   
  )
}

export default TodoList