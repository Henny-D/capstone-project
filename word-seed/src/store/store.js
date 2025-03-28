import { create } from 'zustand';


const useWordStore =create ((set, get) => ({
    words:[
            {word: "happy", definition:"Feeling or showing pleasure or contentment."}
           
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

export default useWordStore