import { create } from "zustand";

const synonymModeStore= create ((set, get) =>({
    words: [

        {word:"happy"}, {word:"fast"}, 
{ word: "big" }, 
{ word: "small" }



    ],

    getRandomWord: ()=>{
        const{words}=get();
        return words.length 
        ? words[Math.floor(Math.random()*words.length)] 
        : {word:"No words available", synonyms:[]};


    },
}));

export default synonymModeStore;
