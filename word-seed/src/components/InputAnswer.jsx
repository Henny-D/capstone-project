import React, { useState } from "react";

const InputAnswer = ({ word, setScore, getNewWord }) => {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = answer.trim().toLowerCase() === word.toLowerCase();

    setFeedback(isCorrect ? " Correct!" : " Wrong! Try again.");
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setTimeout(() => {
        setFeedback("");
        getNewWord();
      }, 1000);
    } else {
      setTimeout(() => setFeedback(""), 1000);
    }
    setAnswer("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cyan-600 p-6 rounded-lg shadow-lg text-center mt-4"
    >
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Write Your Answer here"
        className="w-full p-3 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-900"
      />
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-cyan-600 border border-white text-white font-semibold rounded-full shadow-md hover:bg-cyan-900 transition duration-300"
      >
        Submit
      </button>
      
      {feedback && (
        <p
          className={`text-lg font-bold mt-3 ${
            feedback.toLowerCase().includes("correct")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
};

export default InputAnswer;
