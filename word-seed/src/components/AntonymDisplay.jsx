import React  from "react";
import antonymModeStore from "../store/AntonymModeStore";

const AntonymDisplay = ({word}) => {
    const words = antonymModeStore((state) => state.words);
    const foundWord =words.find((item) => item.word === word);

    return (
        <div  className='bg-yellow-50 rounded-lg shadow-lg p-8 max-w-md w-full text-center font-poppins '>
            <p  className='text-xl text-zinc-800 font-light'>
                {foundWord ? foundWord.word : "Fetching Words"}
            </p>
        </div>
    );
};

export default AntonymDisplay