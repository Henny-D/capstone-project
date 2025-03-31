import React from 'react'
import { useNavigate } from 'react-router-dom'

const GameMode=() => {
    const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-yellow-500 p-6 font-poppins'>
        <h1 className='font-poppins text-5xl font-bold text-zinc-800 mb-4'>PLAY</h1>

        <div className=' text-center max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-8'>

            <button className='font-poppins text-xl w-full mb-4 px-4 py-2 bg-cyan-600 text-zinc-700 font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300' 
            onClick={()=> navigate('/App')}>Vocabulary</button>

            <button className='font-poppins text-xl w-full mb-4 px-4 py-2 bg-cyan-600 text-zinc-700 font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300' 
             onClick={()=> navigate('/antonym')}>Antonym</button>

            <button className='font-poppins text-xl w-full mb-4 px-4 py-2 bg-cyan-600 text-zinc-700 font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300' 
            onClick={()=> navigate('/synonym')}>Synonym</button>
        </div>
    </div>
  );
}

export default GameMode
