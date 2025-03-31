import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import antonymModeStore from '../store/AntonymModeStore';


const AntonymMode=()=>{
    const [word, setWord] = useState("");
    const [antonyms, setAntonyms]= useState([]);
    const [input, setInput] = useState("");
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver]= useState(false);
    const [getReady, setGetReady] = useState(3);
    const [gameStarted, setGameStarted] =useState(false);
    
    const navigate= useNavigate();
    const getRandomWord=antonymModeStore((state) => state.getRandomWord);

    const fetchAntonyms =async (word) => {
        try{
            const response =await fetch ( `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

            if (response.ok) {
                const data=await response.json();
                const antonymList = data[0]?.meanings?.flatMap((meaning)=> meaning.antonyms) || [];
                if (antonymList.length > 0) return antonymList;
                else {("Sorry, no antonyms found for this word. Play again.");
                    navigate ("/GameMode");
                    return[];
                }
            }
        } catch (error) {
            ("Fetching words faild, Please try again later or try other Modes");
            navigate ("/GameMode");
            return[];
        }
    };

    const loadNewWord =async () => {
        const newWord = getRandomWord();
        setWord(newWord.word);
        setAntonyms(await fetchAntonyms(newWord.word));
    };

    useEffect(() => {
        if(getReady===0) {
            setGameStarted(true);
        }else{
            const timer= setTimeout(() => setGetReady((prev) => prev-1), 1000);
            return () => clearTimeout(timer);
        }
        }, [getReady]);

        useEffect(() => {
            loadNewWord();

        }, []);

        const restartGame =() => {
            setIsGameOver(false);
            setScore(0);
            setGetReady(3);
            setGameStarted(false);
            setInput('');
            loadNewWord();
        };

        const checkAnsewr = () => {
            if(antonyms.includes(input.trim().toLowerCase())) {
                setScore((prev) =>prev+1);
                setInput("");
                loadNewWord();
            }else{
                ("Wrong! Try again.")
            }
        };

        return (
            <>
            </>

        );

    };
    
    export default AntonymMode;