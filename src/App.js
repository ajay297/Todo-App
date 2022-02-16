import React,{ useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import Dashboard from './components/Dashboard/Dashboard';
import TodoList from './components/TodoList/TodoList';

function App() {

  const todos=useSelector(state=>state.todos);

  const [currentView, setCurrentView] = useState();

  const sectionTypes=[];

  for(const key in todos){
    sectionTypes.push(key);
  }

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
