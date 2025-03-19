import React from "react";
import { create } from 'zustand';



export const useWordStore =create ((set) => ({
    words:[
        {word: "happy", definition:"Feeling or showing pleasure or contentment."},
        {word: "sad", definition:"Feeling or showing sorrow or unhappy."}
    ],

 
}));