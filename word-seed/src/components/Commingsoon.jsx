import React from 'react'
import { useNavigate } from 'react-router-dom'

const CommingSoon=() =>{
    const navigate = useNavigate();

  return (
    
        <div className='flex flex-col items-center justify-center min-h-screen bg-yellow-500 p-6 text-center font-poppins'>
          <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full'>
            <h1 className='text-4xl fornt-bold text-zinc-800 mb-4 font-bold'>Comming Soon!</h1>
            <p className='text-lg text-zinc-600 mb-6 '>This game is currently under development. <br />Stay tuned for updates!<br/><br />ThankYou!</p>

            <button 
            className='px-6 py-2 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300'
            onClick={()=> navigate('/GameMode')}>Back</button>
        </div>
        </div>

  );
}

export default CommingSoon
