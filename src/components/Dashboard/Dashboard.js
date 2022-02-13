import React from 'react';
import './Dashboard.css';

function Dashboard({sectionTypes,changeCurentViewHandler,setValue,value,addSection}) {

  return (
      <div className="dashboard-container">
            <div className='dashboard'>
        <ul>
        {
            sectionTypes.map(section=>(
                <li onClick={()=>changeCurentViewHandler(section)}>
                  <span>{section}</span>
                </li>  
            ))
        }
        </ul>
        <form>
        <input className='section-input' type="text" placeholder="Add Section" value={value}  onChange={e => setValue(e.target.value)}/>
        <button type="submit" onClick={addSection}>Submit</button>
        </form>
        
    </div>
      </div>
    
  )
}

export default Dashboard