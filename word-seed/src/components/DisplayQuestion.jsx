import React from 'react'
import useWordStore from '../store/Store';

const DisplayQuestion=({word}) =>{
    const words = useWordStore ((state) =>state.words);
    const definition = words.find((item) => item.word===word)?.definition || "Fetching question...";

  return (
    <div className='bg-yellow-50 rounded-lg shadow-lg p-8 max-w-md w-full text-center font-poppins '>
        <p className='text-xl text-zinc-800 font-light'>{definition}</p>
    </div>
  );
}

export default DisplayQuestion
