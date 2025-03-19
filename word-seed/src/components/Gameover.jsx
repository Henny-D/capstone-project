import React from 'react'
import { useNavigate } from 'react-router-dom'

const GameOver=({ score, restartGame}) => {
    const navigate = useNavigate();

  return (
    <div>
        <div>
            <h2>Game Over!</h2>
            <p>Your Score: <span>{score}</span></p>

            <button onClick={restartGame}>
                Play Again
            </button>

            <button onClick={()=>navigate('/')}>
                Home
            </button>
        </div>
    </div>
  );
};

export default GameOver