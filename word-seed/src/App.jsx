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
  const [isGameOver, setIsGameOver] = useState(false);
  const [score,setScore] = useState(0);
  const [word, setWord] = usestate('');
  const [getReady, setGetReady] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const getRandomWord = useWordStore ((state) => state.getRandomWord);
  const getNewWord = () =>{
    const newWord =getRandomWord();
    if (newWord) {
      setWord(newWord.word);
    }
  };

  useEffect(() =>{
    getNewWord();
  }, []);

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
