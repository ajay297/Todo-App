import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/action';
// import { TodoContext } from '../../App';
import './TodoForm.css';

function TodoForm({currentView}) {

  const [value, setValue] = useState('');

  const dispatch=useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    dispatch(addTodo(value,currentView));
    setValue('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" 
      className="input" 
      placeholder="Add Todo" 
      value={value}
      onChange={e => setValue(e.target.value)}
      />
      <button className="button" type="submit">Submit</button>
    </form>
  )
}

export default TodoForm;