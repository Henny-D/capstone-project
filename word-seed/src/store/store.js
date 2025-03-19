import React from "react";
import { create } from 'zustand';



export const useWordStore =create ((set) => ({
    words:[
        {word: "happy", definition:"Feeling or showing pleasure or contentment."},
        {word: "sad", definition:"Feeling or showing sorrow or unhappy."}
    ],

    getRandomWord: () =>{
        const {words}=useWordStore.getState();
        if (words.length === 0) return "Currently no question available, Please refresh or return back. Thank you!";

        const randomIndex = Math.floor (Math.random () * words.length);
        return words [randomIndex];
    },
 
}));