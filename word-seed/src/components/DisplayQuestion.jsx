import React from 'react'

const DisplayQuestion=() =>{
    const words = useWordStore ((state) =>state.words);
    const definition = words.find((w) => w.word===word)?.definition || "Fetching words..."

  return (
    <div>
        <p>{definition}</p>
    </div>
  );
};

export default DisplayQuestion