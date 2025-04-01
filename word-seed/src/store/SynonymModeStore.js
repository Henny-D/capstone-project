import { create } from "zustand";

const synonymModeStore= create ((set, get) =>({
    words: [

        {word:"happy"}, {word:"fast"},
        {word: "strong"}, {word:"helpful"},
        { word: "happy" }, { word: "fast" },
{ word: "strong" }, { word: "bright" },
{ word: "big" }, { word: "small" },
{ word: "kind" }, { word: "smart" },
{ word: "brave" }, { word: "funny" },
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
{ word: "fun" },
{ word: "boring" },
{ word: "clean" },
{ word: "dirty" },
{ word: "neat" },
{ word: "messy" },
{ word: "smooth" },
{ word: "rough" },
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
{ word: "rough" },
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
{ word: "cloudy" },
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
{ word: "adventure" },
{ word: "courageous" },
{ word: "determined" },
{ word: "eager" },
{ word: "fantastic" },
{ word: "generous" },
{ word: "incredible" },
{ word: "joyful" },
{ word: "knowledgeable" },
{ word: "loyal" },
{ word: "magnificent" },
{ word: "noble" },
{ word: "optimistic" },
{ word: "peaceful" },
{ word: "quest" },
{ word: "resilient" },
{ word: "spectacular" },
{ word: "trustworthy" },
{ word: "unique" },
{ word: "vibrant" },
{ word: "wonderful" },
{ word: "ambitious" },
{ word: "bizarre" },
{ word: "compassionate" },
{ word: "diligent" },
{ word: "genuine" },
{ word: "keen" },
{ word: "novel" },
{ word: "outstanding" },
{ word: "quirky" },
{ word: "radiant" },
{ word: "unpredictable" },
{ word: "vivid" },
{ word: "wholesome" },
{ word: "ambiguous" },
{ word: "blissful" },
{ word: "captive" },
{ word: "defiant" },
{ word: "empathetic" },
{ word: "fantastical" },
{ word: "graceful" },
{ word: "heroic" },
{ word: "imaginative" },
{ word: "luminous" },
{ word: "mysterious" },
{ word: "nurturing" },
{ word: "original" },
{ word: "pragmatic" },
{ word: "quietude" },
{ word: "reliable" },
{ word: "steadfast" },
{ word: "tranquil" },
{ word: "unruffled" },
{ word: "venerable" },
{ word: "whiz" },
{ word: "xylophone" },
{ word: "accomplished" },
{ word: "charismatic" },
{ word: "dynamic" },
{ word: "elevated" },
{ word: "fortuitous" },
{ word: "gallant" },
{ word: "te" },
{ word: "jovial" },
{ word: "keen-eyed" },
{ word: "noble-hearted" },
{ word: "observant" },
{ word: "witty" },
{ word: "yoga" },
{ word: "altruistic" },
{ word: "disciplined" },
{ word: "elusive" },
{ word: "flawless" },
{ word: "gracious" },
{ word: "humbling" },
{ word: "inspirational" },
{ word: "jubilant" },
{ word: "mean" }, {word:"helpful"}

    ],

    getRandomWord: ()=>{
        const{words}=get();
        return words.length 
        ? words[Math.floor(Math.random()*words.length)] 
        : {word:"No words available", synonyms:[]};


    },
}));

export default synonymModeStore;