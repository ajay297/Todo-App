import React,{createContext, useState} from 'react';
import "./App.css";
import Dashboard from './components/Dashboard/Dashboard';
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

    const item={id: Math.round(Math.random()*1000),value: value,dateAndTime: new Date()};

    const oldTodo=Todo[section]?Todo[section]:[];
    setTodo({
      ...Todo,
      [section]:[...oldTodo, item]
    });

  }

  const deleteTodo=(id,section)=>{

    setTodo(
      {
        ...Todo,
        [section]: Todo[section].filter(todo=>todo.id!==id)
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
  }

  return (

    <TodoContext.Provider value={{Todo,addTodo,deleteTodo}}>
        <div className='container'>
          <Dashboard sectionTypes={sectionTypes} changeCurentViewHandler={(section)=>setCurrentView(section)} addSection={addSection} value={value} setValue={setValue} currentView={currentView}/>
          <div className='content'>
            <h1>Todo App</h1>
            <h2>Hey I am in {currentView}</h2>
          <TodoList currentView={currentView}/>
          </div>
          
        
      </div>
    </TodoContext.Provider>
   
  );
}

export default App;
