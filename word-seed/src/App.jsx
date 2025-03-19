import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DisplayQuestion from './components/DisplayQuestion';
import InputAnswer from './components/InputAnswer';
import TimerCountdown from './components/TimerCountdown';
import ScoreRegister from './components/ScoreRegister';
import GameOver from './components/Gameover';
import './index.css'

const App=() => {
  const navigate = useNavigate();

  return (
    <div>
      <div> 
        <button onClick={() =>navigate ('/')}>Home</button>
        <button onClick={() =>navigate ('/GameMode')}>Games</button>
      </div>
      <div>


        <>
            <DisplayQuestion />
            <InputAnswer  />
            <TimerCountdown  />
            <ScoreRegister />
        </>

      </div>
    </div>
  )
}

export default App
