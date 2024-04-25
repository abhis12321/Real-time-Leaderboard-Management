import React from 'react';
import Card from './components/Card';

function App() {  
  return (
    <div className='bg-slate-800 text-white min-h-[100vh] flex items-center justify-center pt-14 pb-2'>
      <div className="relative w-[98%] max-w-[900px] border-2 border-sky-500 py-4 px-2 xs:px-1 md:px-8 rounded-xl bg-gradient-to-br from-blue-700 via-indigo-800 to-violet-900 flex flex-col gap-4 items-center">  
        <h2 className="absolute top-[-2.5rem] bg-indigo-950 text-3xl w-fit font-semibold border-2 border-sky-600 py-3 px-5 rounded-lg">LeaderBoard</h2>      
        <Card />
      </div>
    </div>
  )
}

export default App
