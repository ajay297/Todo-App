import React,{ useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import Dashboard from './components/Dashboard/Dashboard';
import TodoList from './components/TodoList/TodoList';

// export const TodoContext=createContext();

function App() {
  // const [Todo, setTodo] = useState({
  //   // default:[],
  // });

  const todos=useSelector(state=>state.todos);

  console.log(todos);
  // const [value, setValue] = useState('');

  const sectionTypes=[];

  for(const key in todos){
    sectionTypes.push(key);
  }

  console.log(sectionTypes);



  const [currentView, setCurrentView] = useState();

  // const addTodo=(value,section)=>{

  //   const item={id: Math.round(Math.random()*1000),value: value,dateAndTime: new Date()};

  //   const oldTodo=Todo[section]?Todo[section]:[];
  //   setTodo({
  //     ...Todo,
  //     [section]:[...oldTodo, item]
  //   });

  // }

  // const deleteTodo=(id,section)=>{

  //   setTodo(
  //     {
  //       ...Todo,
  //       [section]: Todo[section].filter(todo=>todo.id!==id)
  //     }
  //     )

  // }

  // const editTodo=(id,value,section)=>{
  
  //     setTodo(
  //       {
  //         ...Todo,
  //         [section]: Todo[section].map(todo=>{
  //           if(todo.id===id){
  //             return {...todo, value:value,dateAndTime: new Date()};
  //           }
  //           return todo;
  //         })
  //       }
  //       )
  
  // }
  
  // const addSection=(e)=>{
  //   console.log(e);
  //   e.preventDefault();
  //   if (!value) return;
  //   // setTodo({
  //   //   ...Todo,
  //   //   [value]:[]
  //   // })
  //   dispatch(addSection(value));
  //   setValue('');
  // }

  return (
        <div className='container'>
          <Dashboard sectionTypes={sectionTypes} changeCurentViewHandler={(section)=>setCurrentView(section)} currentView={currentView}/>
          <div className='content'>
            <h1>Todo App</h1>
            {
              currentView&&<TodoList currentView={currentView}/>
            }
          </div>
          
        
      </div>
   
  );
}

export default App;
