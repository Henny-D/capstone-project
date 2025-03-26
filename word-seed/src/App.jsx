import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DisplayQuestion from './components/DisplayQuestion';
import InputAnswer from './components/InputAnswer';
import TimerCountdown from './components/TimerCountdown';
import ScoreRegister from './components/ScoreRegister';
import GameOver from './components/Gameover';
import useWordStore from './store/Store';
import './index.css'

const App=() => {
  const navigate = useNavigate();
  const [isGameOver, setIsGameOver] = useState(false);
  const [score,setScore] = useState(0);
  const [word, setWord] = useState('');
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

  useEffect(()=>{
    let timer;
    if(getReady>0) {
      timer=setTimeout(() => setGetReady(getReady-1), 1000);
    } else {
      setGameStarted(true);
    }
    return()=> clearTimeout(timer);
    }, [getReady]);

    const restartGame =() =>{
      setIsGameOver(false);
      setScore(0);
      setGetReady(4);
      setGameStarted(false);
      getNewWord();
    };
 
  return (
    <div>
      <div> 
        <button onClick={() =>navigate ('/')}>Home</button>
        <button onClick={() =>navigate ('/GameMode')}>Games</button>
      </div>
      <div>
          {isGameOver ? (
            <GameOver score={score} restartGame={restartGame} />
          ) : !gameStarted ? (
            <h2>{getReady > 0 ? getReady : 'Go!'}</h2>
          ):(
        <>
            <DisplayQuestion  word ={word}/>
            <InputAnswer word={word} setScore={setScore} getNewWord ={getNewWord} />
            <TimerCountdown setIsGameOver={setIsGameOver} key={word} />
            <ScoreRegister  score={score}/>
        </>
          )}
      </div>
    </div>
  );
};

export default App
