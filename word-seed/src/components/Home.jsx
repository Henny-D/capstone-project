import React from 'react'
import { useNavigate } from 'react-router-dom';


const Home=() => {
    const navigate =useNavigate();

  return (
    <div>
        <div>
            <h1>Word <br/>Seed</h1>
        </div>
        <div>
            <p>Play & Learn English!</p>
            <p>A . B . C . D </p>
            <button onClick={()=> navigate('/GameMode')}>START</button>
        </div>
    </div>
  );
}

export default Home
