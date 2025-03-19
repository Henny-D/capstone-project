import React from 'react'
import { useNavigate } from 'react-router-dom'

const CommingSoon=() =>{
    const navigate = useNavigate();

  return (
    <div>
        <div>
            <h1>Comming Soon!</h1>
            <p>This game is currently under development. Stay tuned for updates!<br/> Thank You!</p>

            <button onClick={()=> navigate('/GameMode')}>Back</button>
        </div>
    </div>
  );
}

export default CommingSoon