import React, { useState } from 'react'
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm'
import './TodoList.css'

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodos=(value)=>{
        setTodos([...todos, {id :Math.round(Math.random()*1000),value:value}])
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }

  return (
    <div>
        <TodoForm addTodos={addTodos}/>
        <div className='card-container'>
        {
            todos.map(ele=>(
                <TodoCard todo={ele.value} key={ele.id} id={ele.id} deleteTodo={deleteTodo}/>
            ))
        }
        </div>
    </div>
   
  )
}

export default TodoList