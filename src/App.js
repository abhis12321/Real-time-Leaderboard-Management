import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import Nav from './components/Nav';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className='bg-warning text-primary border border-success mx-2 my-2 p-2 rounded d-flex justify-content-center align-items-center'>
        <div className='para'>Hello World...!</div>
        <button className='btn-success btn mx-2'>Booti</button>
      </div>
    </React.Fragment>
  )
}

export default App
