import React from 'react'
import { useNavigate } from 'react-router-dom'

const GameMode=() => {
    const navigate = useNavigate();

  return (
    <div>
        <h1>PLAY</h1>
        <div>
            <button onClick={()=> navigate('/App')}>Vocabulary</button>
            <button onClick={()=> navigate('/commingsoon')}>Antonym</button>
            <button onClick={()=> navigate('/commingsoon')}>Synonym</button>
        </div>
    </div>
  );
}

export default GameMode