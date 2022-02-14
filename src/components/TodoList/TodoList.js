import React, { useState,useContext } from 'react'
import { TodoContext } from '../../App';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import './TodoList.css';



function TodoList() {

    const {Todo}=useContext(TodoContext);

    const {currentView} = useContext(TodoContext);

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
        <TodoForm/>
        <div className='card-container'>
        {
            TodoList.map(ele=>(
                <TodoCard todo={ele.value} key={ele.id} id={ele.id} currentView={currentView} dateAndTime={ele.dateAndTime}/>
            ))
        }
        </div>
    </div>
   
  )
}

export default TodoList