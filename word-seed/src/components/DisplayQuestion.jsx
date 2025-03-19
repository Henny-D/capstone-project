import React from 'react'
import { useWordStore } from '../store/store';

const DisplayQuestion=({word}) =>{
    const words = useWordStore ((state) =>state.words);
    const definition = words.find((item) => item.word===word)?.definition || "Fetching question..."

  return (
    <div>
        <p>{definition}</p>
    </div>
  );
}

export default DisplayQuestion