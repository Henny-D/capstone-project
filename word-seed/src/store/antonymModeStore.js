import { create } from "zustand";

const antonymModeStore= create ((set, get) =>({
    words: [

        {word:"happy"}, {word:"fast"},
        {word: "strong"}, {word:"helpful"}, { word: "bright" },
{ word: "big" }, { word: "small" },


{ word: "kind" }
    ],

    getRandomWord: ()=>{
        const{words}=get();
        return words.length 
        ? words[Math.floor(Math.random()*words.length)] 
        : {word:"No words available", antonyms:[]};


    },
}));

export default antonymModeStore;
