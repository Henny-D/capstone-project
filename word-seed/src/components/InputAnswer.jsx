import React, { useState} from 'react'

const InputAnswer=({word, setScore, getNewWord}) => {
    const [answer, setAnswer]= useState('');
    const [feedback, setFeedback] = useState('');
    

    const handleSubmit = (e) => {
      e.preventDefault();
      const isCorrect =answer.trim().toLowerCase() === word.toLowerCase();

      setFeedback (isCorrect ? "Correct!" : "Wrong! Try again.");
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
        setTimeout(() => {
          setFeedback('')
          getNewWord();
        }, 1000);
      } else {
        setTimeout(() => setFeedback(''), 1000);
      }
      setAnswer('')
    };

  return (
    <form 
        onSubmit={handleSubmit}  >
        <input
        type="text"
        value={answer} 
        onChange={(e) => setAnswer(e.target.value)}
        placeholder='Write Your Answer here'

        />
        <button
        type="submit">
            Submit
        </button>
        
        {feedback && ( 
          <p 
          className={`text-lg font-bold mt-3 ${
            feedback === 'Correct !' ? 'text-green-500' : 'text-red-500'}`}
        
        >{feedback}
        </p>)}

        </form>
  );
};

export default InputAnswer
