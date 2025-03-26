import React from "react";
import { useNavigate } from "react-router-dom";

const GameOver = ({ score, restartGame }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-500 p-3 font-poppins">
      <div className="text-center bg-zinc-300 rounded-lg shadow-lg py-10 max-w-md w-full sm:w-1/2 md:w-1/3 lg:w-full">
        <h2 className="text-4xl font-semibold text-zinc-800 mb-4">Game Over!</h2>
        <p className="text-2xl text-zinc-800 mb-6">
          Your Score: <span className="font-boldtext-cyan-600">{score}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <button 
        className=" mt-4 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300"
        onClick={restartGame}>Restart </button>
        
        <button 
        className="mt-4 px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300"
        onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default GameOver;
