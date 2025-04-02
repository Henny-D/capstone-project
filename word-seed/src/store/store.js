import { create } from 'zustand';


const useWordStore =create ((set, get) => ({
    words:[
            {word: "happy", definition:"Feeling or showing pleasure or contentment."},
            {word: "sad", definition:"Feeling or showing sorrow or unhappy."},
            { word: "run", definition: "Move at a speed faster than a walk." },
            { word: "jump", definition: "Push oneself off a surface and into the air by using one's legs." },
            { word: "eat", definition: "Put (food) into the mouth and chew and swallow it." },
                    
                { word: "splendid", definition: "Very impressive or beautiful." }
    ],

    getRandomWord: () =>{
        const {words}=get();
        return words.length >0
        ?words[Math.floor(Math.random()*words.length)] 
        : "Currently no question available, Please refresh or return back. Thank you!";
    },
 
}));

export default useWordStore