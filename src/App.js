import React,{createContext, useState} from 'react';
import "./App.css";
import TodoList from './components/TodoList/TodoList';

export const TodoContext=createContext();

function App() {
  const [Todo, setTodo] = useState({
    default:[],
  });

  const [value, setValue] = useState('');

  const sectionTypes=[];

  for(const key in Todo){
    sectionTypes.push(key);
  }


  const [currentView, setCurrentView] = useState(sectionTypes[0]);

  const addTodo=(value,section)=>{

    const item={id: Math.round(Math.random()*1000),value: value};

    const oldTodo=Todo[section]?Todo[section]:[];
    setTodo({
      ...Todo,
      [section]:[...oldTodo, item]
    });

  }

  const deleteTodo=(id)=>{

    setTodo(
      {
        ...Todo,
        default: Todo.default.filter(todo=>todo.id!==id)
      }
      )

  }
  
  const addSection=(e)=>{
    e.preventDefault();
    if (!value) return;
    setTodo({
      ...Todo,
      [value]:[]
    })
    setValue('');
    console.log('hello');
  }

  console.log(Todo);

  

 

  
  

  return (

    <TodoContext.Provider value={{Todo,addTodo,deleteTodo}}>
        <div className='container'>

        <div className='dashboard'>
            <ul>
              {
                sectionTypes.map(section=>(
                  <li key={section} onClick={()=>setCurrentView(section)}>{section}</li>
                ))
              }
            </ul>
            <form>
              <input type="text" placeholder="Add Section" value={value}  onChange={e => setValue(e.target.value)}/>
              <button type="submit" onClick={addSection}>Submit</button>
            </form>
            
          </div>

          <div>
            <h1>Todo App</h1>
            <h2>Hey I am in {currentView}</h2>
          <TodoList currentView={currentView}/>
          </div>
          
        
      </div>
    </TodoContext.Provider>
   
  );
}

export default App;
