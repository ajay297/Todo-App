import React, { useState,useContext } from 'react'
import { useSelector } from 'react-redux';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import './TodoList.css';



function TodoList({currentView}) {

    // const {Todo}=useContext(TodoContext);
    const todos=useSelector(state=>state.todos);

    // const {currentView} = useContext(TodoContext);

    const todoList=todos[currentView];

    // console.log(Todo);
    // console.log(addTodo);
    // console.log(deleteTodo);
    // const [todos, setTodos] = useState([]);

    // const addTodos=(value)=>{
    //     setTodos([...todos, {id :Math.round(Math.random()*1000),value:value}])
    // }

    // const deleteTodo=(id)=>{
    //     setTodos(todos.filter(todo=>todo.id!==id))
    // }

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