import React, { useEffect, useState } from 'react'

const TimerCountdown=({setIsGameOver}) => {
  const [time, setTime] = useState (30);

  useEffect (() => {
    if (time === 0) {
      setIsGameOver(true);
      return;
    }

    const timer=setTimeout(() =>setTime(time-1), 1000);
    return () =>clearTimeout(timer);
  }, [time]);


  return (
    <div>
        <h2>Timer:</h2>        
        <p>{time} s</p>
    </div>
  )
}

export default TimerCountdown
