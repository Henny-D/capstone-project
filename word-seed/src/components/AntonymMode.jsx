import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import antonymModeStore from "../store/AntonymModeStore";
import GameOver from "./Gameover";
import TimerCountdown from "./TimerCountdown";
import ScoreRegister from "./ScoreRegister";
import AntonymDisplay from "./AntonymDisplay";

const AntonymMode = () => {
  const [word, setWord] = useState("");
  const [antonyms, setAntonyms] = useState([]);
  const [message, setMessage] = useState("");
  const [input, setInput]= useState("");
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [getReady, setGetReady] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const navigate = useNavigate();
  const getRandomWord = antonymModeStore((state) => state.getRandomWord);

  const handleError= (message)=>{
    setMessage(message);
    setTimeout(()=> navigate ('/GameMode'), 2000);
  };

  const fetchAntonyms = async (word) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      if (!response.ok) throw new Error ("API is not responding. Please try again.");

        const data = await response.json();
        const antonymList =data[0]?.meanings?.flatMap((meaning) => meaning.antonyms) || [];

        if (antonymList.length > 0) return antonymList;
        handleError("Sorry, no antonyms found for this word. Play again.");
        return [];
        }  catch (error) {
      handleError("Fetching words faild, Please try again later or try other Modes");
      return [];
    }
  };

  const loadNewWord = async () => {
    const newWord = getRandomWord();
    setWord(newWord.word);
    setAntonyms(await fetchAntonyms(newWord.word));
  };

  useEffect(() => {
    if (getReady === 0) {
      setGameStarted(true);
    } else {
      const timer = setTimeout(() => setGetReady((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [getReady]);

  useEffect(() => {
    loadNewWord();
  }, []);

  const restartGame = () => {
    setIsGameOver(false);
    setScore(0);
    setGetReady(3);
    setGameStarted(false);
    setInput("");
    loadNewWord();
  };

  const checkAnswer = () => {
    if (antonyms.includes(input.trim().toLowerCase())) {
      setScore((prev) => prev + 1);
      setMessage ({text:"Correct !", color:"text-green-600"});
      setTimeout(()=>{
        setMessage(null);
        loadNewWord();
      }, 1500);

    } else {
      setMessage({text:"Wrong! Try again.", color:"text-red-600"});
    }
    setInput("");
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-yellow-500 p-6 font-poppins'>
      <div className='flex justify-between w-full mb-4 fixed top-2 rounded-lg bg-yellow-600/60 px-20 '>
        <button className='px-4 py-2 bg-cyan-600 text-white rounded-full shadow-md hover:bg-cyan-900 transition duration-300 '
        onClick={() => navigate("/")}>
          Home
        </button>
        <button className='px-4 py-2 bg-cyan-600 text-white rounded-full shadow-md hover:bg-cyan-900 transition duration-300 '
        onClick={() => navigate("/GameMode")}>
          Games
        </button>
      </div>

      <div  className='mt-10 text-center font-poppins max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
        {isGameOver ? (
        <GameOver score={score} restartGame={restartGame} />
        ): !gameStarted ? (
        <h2 className='text-4xl font-semibold text-zinc-800'>{getReady > 0 ? getReady : "Go!"}</h2>
      ):(
        <div>
          <h2 className='font-poppins text-5xl font-bold text-zinc-800 mb-4'>Antonym</h2>
          <AntonymDisplay word={word} />

          <input
            type="text"
            value={input}
            placeholder='Write Your Answer here'
            className='mt-3 w-full p-3 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-900'
            onChange={(e) => setInput(e.target.value)}
            
          />
           {message && (<p className={`text-lg font-bold mt-3 ${message.color}`}>{message.text}</p>)}


          <button onClick={checkAnswer}  className='mt-4 px-6 py-2 bg-cyan-600 border border-white text-white font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300'>
            Submit
          </button>

          <div className='mt-2 flex gap-4 bg-cyan-600 p-4 rounded-lg shadow-lg text-center '>
            <TimerCountdown setIsGameOver={setIsGameOver} key={word} />
            <ScoreRegister score={score} />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default AntonymMode;
