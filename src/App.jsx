import React, { useState } from 'react'
import Timeline from './components/Timeline'
import ProblemStatements from './components/ProblemStatements'
import './App.css'

function App() {
  const [activeComponent, setActiveComponent] = useState('timeline')

  return (
    <div className="App">
      <nav className="navigation">
        <h1>Praytna 3.0 - ACM Hackathon</h1>
        <div className="nav-buttons">
          <button 
            className={activeComponent === 'timeline' ? 'active' : ''}
            onClick={() => setActiveComponent('timeline')}
          >
            Timeline
          </button>
          <button 
            className={activeComponent === 'problems' ? 'active' : ''}
            onClick={() => setActiveComponent('problems')}
          >
            Problem Statements
          </button>
        </div>
      </nav>
      
      <main>
        {activeComponent === 'timeline' && <Timeline />}
        {activeComponent === 'problems' && <ProblemStatements />}
      </main>
    </div>
  )
}

export default App