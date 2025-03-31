import React  from "react";
import antonymModeStore from "../store/AntonymModeStore";

const AntonymDisplay = ({word}) => {
    const words = antonymModeStore((state) => state.words);
    const foundWord =words.find((item) => item.word === word);

    return (
        <div>
            <p className="text-xl text-zinc-800 font-light">
                {foundWord ? foundWord.word : "Fetching Words"}
            </p>
        </div>
    );
};

export default AntonymDisplay