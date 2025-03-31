


import { create } from 'zustand';
 
 
export const useWordStore =create ((set, get) => ({
     words:[
             
             {word: "sad", definition:"Feeling or showing sorrow or unhappy."},
             { word: "run", definition: "Move at a speed faster than a walk." }
            
     ],
     
     fetchWords: async () =>{
         try {
             const response = await fetch ("https://api.wordnik.com/v4/words.json/randomWord?api_key=2hepxcoshqkaus4k0wcicdluivdnwfe3l7y0czkcwfs6wlmbj");
             if (!response.ok) throw new Error();
 
             const wordData = await response.json();
             const newWord = wordData.word;
 
             if (get().words.some(w => w.word === newWord)) return; //checks to not fetch already existed word in state (prevent duplicate words)
             
             const definitionResponse =await fetch ("https://api.wordnik.com/v4/word.json/${newWord}/definitions?api_key=2hepxcoshqkaus4k0wcicdluivdnwfe3l7y0czkcwfs6wlmbj");
             if(!definitionResponse.ok) throw new Error();
 
             const definitionData =await definitionResponse.json();
             const definition= definitionData.length >0 ? definitionData[0].text : "Currently no question available, Please refresh or return back. Thank you!";
 
     getRandomWord: () =>{
         const {words}=useWordStore.getState();
         if (words.length === 0) return "Currently no question available, Please refresh or return back. Thank you!";
 
         const randomIndex = Math.floor (Math.random () * words.length);
         return words [randomIndex];
             set({words: [...get().words, { word: newWord, definition}] });
 
         }  catch {
             set({words:[...get().words,get().getRandomWord()] });
         }
     },
  
 
     getRandomWord: () =>{
         const {words}=get();
         return words.length >0 ? words [Math.floor(Math.random()* words.length)] 
         : "Currently no question available, Please refresh or return back. Thank you!";
 
     }
 }));
 
