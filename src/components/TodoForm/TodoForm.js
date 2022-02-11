import React,{useState} from 'react'
import './TodoForm.css';

function TodoForm({addTodos}) {

  const [value, setValue] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodos(value);
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