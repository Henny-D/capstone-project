import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DisplayQuestion from './components/DisplayQuestion';
import InputAnswer from './components/InputAnswer';
import TimerCountdown from './components/TimerCountdown';
import ScoreRegister from './components/ScoreRegister';
import GameOver from './components/Gameover';
import useWordStore from './store/store.js';
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
      setGetReady(3);
      setGameStarted(false);
      getNewWord();
    };
 
  return (

    
    <div className='flex flex-col justify-center items-center min-h-screen bg-yellow-500 p-6 font-poppins'>
    <div className='flex justify-between w-full mb-4 fixed top-2 rounded-lg bg-yellow-600/60 px-20 '> 

<button 
className='px-4 py-2 bg-cyan-600 text-white rounded-full shadow-md hover:bg-cyan-900 transition duration-300 '
onClick={() =>navigate ('/')}>Home</button>

<button 
className='px-4 py-2 bg-cyan-600 text-white rounded-full shadow-md hover:bg-cyan-900 transition duration-300 '
onClick={() =>navigate ('/GameMode')}>Games</button>
</div>

      <div className='mt-10 text-center font-poppins max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
          {isGameOver ? (
            <GameOver score={score} restartGame={restartGame} />
          ) : !gameStarted ? (
            <h2 className='text-4xl font-semibold text-zinc-800'>{getReady > 0 ? getReady : 'Go!'}</h2>
          ):(
        <div>
            <DisplayQuestion  word ={word}/>
            <InputAnswer word={word} setScore={setScore} getNewWord ={getNewWord} />

            <div className='mt-2 flex gap-4 bg-cyan-600 p-4 rounded-lg shadow-lg text-center '>
            <TimerCountdown setIsGameOver={setIsGameOver} key={word} />
            <ScoreRegister  score={score}/>
            </div>
        </div>
          )}
      </div>
    </div>

  );
};

export default App
