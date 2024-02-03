import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Card from './components/Card';
import './App.css'

function App() {  
  return (
    <>
      <div className="main container pt-5 pb-3 position-relative my-5 rounded-5  border border-primary">  
        <h2 className="position-absolute top-0 start-50 translate-middle badge tag p-3 fs-4">LeaderBoard</h2>      
        <Card />
      </div>
    </>
  )
}

export default App
