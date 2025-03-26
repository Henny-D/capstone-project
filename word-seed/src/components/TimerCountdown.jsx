import React, { useEffect, useState } from 'react'

const TimerCountdown=({setIsGameOver}) => {
  const [time, setTime] = useState (20);

  useEffect (() => {
    if (time === 0) {
      setIsGameOver(true);
      return;
    }

    const timer=setTimeout(() =>setTime(time-1), 1000);
    return () =>clearTimeout(timer);
  }, [time]);


  return (
    <div className='bg-yellow-50 p-1 rounded-lg shadow-md text-center w-40 font-poppins'>
        <h2 className=' text-sm font-semibold text-gray-700 '>Timer:</h2>        
        <p className='text-sm font-bold text-red-400'>{time} s</p>
    </div>
  )
}

export default TimerCountdown
