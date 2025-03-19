import React, { useState} from 'react'

const InputAnswer=() => {
    const [answer, setAnswer]= useState('')

  return (
    <form>
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