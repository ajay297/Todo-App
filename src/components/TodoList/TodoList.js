import React, { useState,useContext } from 'react'
import { TodoContext } from '../../App';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import './TodoList.css';



function TodoList({currentView}) {

    const {Todo,addTodo,deleteTodo}=useContext(TodoContext);

    const TodoList=Todo[currentView];

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
        <TodoForm addTodo={addTodo} currentView={currentView}/>
        <div className='card-container'>
        {
            TodoList.map(ele=>(
                <TodoCard todo={ele.value} key={ele.id} id={ele.id} deleteTodo={deleteTodo} currentView={currentView}/>
            ))
        }
        </div>
    </div>
   
  )
}

export default TodoList