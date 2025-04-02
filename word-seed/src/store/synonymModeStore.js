import { create } from "zustand";

const synonymModeStore= create ((set, get) =>({
    words: [

        {word:"happy"}, {word:"fast"},
        {word: "strong"}, {word:"helpful"}, { word: "bright" },
{ word: "big" }, { word: "small" },
{ word: "kind" },
{ word: "brave" }, 
{ word: "helpful" }, { word: "friendly" },
{ word: "quiet" }, { word: "loud" },
{ word: "hard" }, { word: "soft" }, { word: "clean" },
{ word: "messy" },{ word: "new" }, { word: "old" },
{ word: "rich" },
{ word: "poor" },
{ word: "beautiful" },
{ word: "ugly" },
{ word: "young" },
{ word: "old" },
{ word: "high" },
{ word: "low" },
{ word: "sweet" },
{ word: "sour" },
{ word: "hot" },
{ word: "cold" },
{ word: "strong" },
{ word: "weak" },
{ word: "tall" },
{ word: "short" },
{ word: "boring" },
{ word: "clean" },
{ word: "dirty" },
{ word: "neat" },
{ word: "messy" },
{ word: "smooth" },

{ word: "slow" },
{ word: "quick" },
{ word: "sweet" },
{ word: "bitter" },
{ word: "love" },
{ word: "hate" },
{ word: "fast" },
{ word: "slow" },
{ word: "rich" },
{ word: "poor" },
{ word: "serious" },
{ word: "peaceful" },
{ word: "loud" },
{ word: "soft" },
{ word: "hard" },
{ word: "smooth" },
{ word: "dull" },
{ word: "gentle" },
{ word: "harsh" },
{ word: "brave" },
{ word: "cowardly" },
{ word: "patient" },
{ word: "impatient" },
{ word: "honest" },
{ word: "dishonest" },
{ word: "polite" },
{ word: "rude" },
{ word: "clean" },
{ word: "dirty" },
{ word: "neat" },
{ word: "untidy" },
{ word: "bright" },
{ word: "dim" },
{ word: "clear" },
{ word: "noisy" },
{ word: "quiet" },
{ word: "strong" },
{ word: "weak" },
{ word: "rich" },
{ word: "poor" },
{ word: "dull" },
{ word: "brave" },
{ word: "scared" },
{ word: "young" },
{ word: "old" },
{ word: "happy" },
{ word: "sad" },
{ word: "excited" },
{ word: "bored" },
{ word: "confident" },
{ word: "shy" },
{ word: "friendly" },
{ word: "optimistic" },
{ word: "peaceful" },

{ word: "unique" },
{ word: "vibrant" },
{ word: "wonderful" },

{ word: "heroic" },

{ word: "reliable" },

{ word: "dynamic" },

{ word: "mean" }

    ],

    getRandomWord: ()=>{
        const{words}=get();
        return words.length 
        ? words[Math.floor(Math.random()*words.length)] 
        : {word:"No words available", synonyms:[]};


    },
}));

export default synonymModeStore;
