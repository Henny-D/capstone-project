import React from 'react'

const TimerCountdown=({time}) => {

  return (
    <div>
        <h2>Timer:</h2>        
        <p>{time} s</p>
    </div>
  )
}

export default TimerCountdown