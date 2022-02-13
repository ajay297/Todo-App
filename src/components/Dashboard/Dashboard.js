import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import './Dashboard.css';

function Dashboard({sectionTypes,changeCurentViewHandler,setValue,value,addSection,currentView}) {

  const [addSectionMode, setAddSectionMode] = useState(false);
  
  const addSectionHandler = (e) => {
    addSection(e);
    setAddSectionMode(false);
  }

  return (
      <div className="dashboard-container">
            <div className='dashboard'>
        <ul>
        {
            sectionTypes.map(section=>(
                <li className={section===currentView?'active':''} onClick={()=>changeCurentViewHandler(section)} key={section}>
                  <span>{section}</span>
                </li> 
            ))
        }
        <li>
           <form>
        <input className='section-input' style={{
            display: addSectionMode ? 'inline-block' : 'none'
        }} type="text" placeholder="Add Section" value={value}  onChange={e => setValue(e.target.value)}/>
        <button className='section-button' type="submit" onClick={(e)=>addSectionHandler(e)}>Submit</button>
        </form>
        </li>
        <li><FaPlusCircle className='add-icon' onClick={()=>setAddSectionMode(true)}/></li>
        </ul>
       
        
    </div>
      </div>
    
  )
}

export default Dashboard