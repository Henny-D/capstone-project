import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home=() => {
    const navigate =useNavigate();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-yellow-500 p-6 font-poppins'>
        <div className='text-center bg-cyan-600 rounded-lg shadow-lg py-10 max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <h1 className='text-6xl font-bold text-zinc-700 mb-4'>Word <br/>Seed</h1>
        </div>
        <div className='text-center bg-zinc-300 rounded-full shadow-lg p-8 max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-8'>
            <p className=' font-poppins text-2xl font-semibold text-zinc-700 '>Play & Learn English!</p><br />
            <p className='font-poppins text-4xl font-bold text-zinc-700 mb-4'>A . B . C . D </p><br />
            
            <button 
            className='font-poppins mb-0 px-3 py-2 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300 '
            onClick={()=> navigate('/GameMode')}>START</button>
        </div>
    </div>
  );
}

export default Home
