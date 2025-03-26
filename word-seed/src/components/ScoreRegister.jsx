import React from 'react'

const ScoreRegister=({score}) => {
    
  return (
    <div className='font-poppins bg-yellow-50 p-2 rounded-lg shadow-md test-center w-40'>
        <h2 className='text-lg font-bold text-gray-700'>Score:</h2>
        <p className='text-xl font-bold text-gray-700'>{ score}</p>
    </div>
  )
}

export default ScoreRegister
