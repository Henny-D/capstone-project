import React, { useState} from 'react'

const InputAnswer=() => {
    const [answer, setAnswer]= useState('');
    

    const handleSubmit = (e) => {
      e.preventDefault();
      if (answer.toLowerCase()=== useWordStore.toLowerCase()) {
        setScore((prevScore) => prevScore + 1);
        setTimeout(() => {
          getNewWord();
        }, 1000);
      } else {
        setTimeout(() (''), 1000);
      }
      setAnswer('')
    };

  return (
    <form 
        onSubmit={handleSubmit}
      
    >
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


        </form>
  );
};

export default InputAnswer