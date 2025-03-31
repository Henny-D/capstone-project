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
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [getReady, setGetReady] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const navigate = useNavigate();
  const getRandomWord = antonymModeStore((state) => state.getRandomWord);

  const fetchAntonyms = async (word) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (response.ok) {
        const data = await response.json();
        const antonymList =
          data[0]?.meanings?.flatMap((meaning) => meaning.antonyms) || [];
        if (antonymList.length > 0) return antonymList;
        else {
          ("Sorry, no antonyms found for this word. Play again.");
          navigate("/GameMode");
          return [];
        }
      }
    } catch (error) {
      ("Fetching words faild, Please try again later or try other Modes");
      navigate("/GameMode");
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

  const checkAnsewr = () => {
    if (antonyms.includes(input.trim().toLowerCase())) {
      setScore((prev) => prev + 1);
      setInput("");
      loadNewWord();
    } else {
      alert("Wrong! Try again.");
    }
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
          Game Mode
        </button>
      </div>

      <div>
        {isGameOver ? (
        <GameOver score={score} restartGame={restartGame} />
        ): !gameStarted ? (
        <h2>{getReady > 0 ? getReady : "Go!"}</h2>
    ) : (
        <>
          <h2>Antonym</h2>
          <AntonymDisplay word={word} />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=""
          />

          <button onClick={checkAnsewr} className="">
            Submit
          </button>

          <div className="">
            <TimerCountdown setIsGameOver={setIsGameOver} key={word} />
            <ScoreRegister score={score} />
          </div>
        </>
        )}
      </div>
    </div>
  );
};

export default AntonymMode;
