🧠Word-Seed - Play & Learn 🎮
Welcome to Word-Seed - Play & Learn, an interactive educational game where kids test their vocabulary skills by finding words, synonyms and  antonyms before time runs out! 🚀. 
The game is aimed at improving vocabulary and word recognition, and it will be simple yet fun and engaging for children.
This game is a part of the Code-Seed project I envisioned, designed to make coding and learning fun, engaging, and educational for kids.

📜 Table of Contents
=> Problem addressed
=> Features
=> Technologies Used
=> Limitations & Known Issues
=> Future Enhancements
=> Installation & Running
=> Game Rules
=> Project Structure
=> Contributing
=> License
=> Contact

    🏆 Problem Addressed
In today's digital age, parents face a common challenge: ensuring that kids learn effectively while spending time on screens. Wordseed addresses this issue by transforming screen time into a learning adventure. Through interactive word-guessing games, children can enhance their vocabulary, understand antonyms and synonyms, and build confidence in their language skills.
This project will be followed by an enhanced version of this and an app for the Code-Seed project where I develop a similar app for code learning in a fun and easy way for kids.

✨ Features
# Three Engaging Game Modes:
        -> Vocabulary Mode: Guess the correct word based on the given definition.
        -> Antonym Mode: Find the opposite meaning of a given word.
        -> Synonym Mode: Match words with similar meanings.

# Kid-Friendly Interface: A playful and colorful UI designed to keep children engaged.
# Randomized Questions: Ensures a unique learning experience every time.
# Timer-Based Challenge: Encourages quick thinking and improves recall.
# Score Tracking: Motivates kids to improve their performance over time.

The first mode leverages a store to fetch data while the next two leverages <real-time API data > to fetch  and synonyms for a given word, making every round unique and educational.
The project is built using <React,> ensuring a smooth and responsive gameplay experience.

🛠 Technologies Used
# Frontend: React, Tailwind CSS
# State Management: Zustand
# API: DictionaryAPI
# Routing: React Router
# Build Tool: Vite

⚠️ Limitations & Known Issues
# Offline Mode Limitation: 
        The app requires an internet connection to fetch new words dynamically for the last two modes, while can work offline for the first mode.
# Limited Word Database: 
        The vocabulary set is currently predefined, but future updates will expand the database.
# No Multiplayer Mode: 
        The game is single-player only at this stage.

📌 Future Enhancements
Multiplayer Mode: Compete with friends in real time.
Progress Tracking: Allow parents to monitor their child's learning journey.
More Word Categories: Expand the database with more kid-friendly words.

🚀 Installation & Running
You can access the live version at Vercel:
https://word-seed.vercel.app/

To run the project locally, follow these steps:
1️⃣ Clone the Repository

git clone https://github.com/Henny-D/capstone-project.git
cd word-seed

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev
The app will be available at http://localhost:5173/.

🎮 Game Rules
Vocabulary Mode
 1️⃣ The game starts with a countdown.
 2️⃣ A definition appears on the screen.
 3️⃣ Type the word described by the definition above in the input box and submit.
 4️⃣ If correct, You gain 1 point & move to the next word.
 5️⃣ If incorrect, You can try again.
 6️⃣ The timer ⏳ continues to count down.
 7️⃣ The game ends when the timer reaches zero.
Antonym Mode
 1️⃣ The game starts with a countdown.
 2️⃣ A word appears on the screen.
 3️⃣ Type the antonym in the input box and submit.
 4️⃣ If correct, You gain 1 point & move to the next word.
 5️⃣ If incorrect, You can try again.
 6️⃣ The timer ⏳ continues to count down.
 7️⃣ The game ends when the timer reaches zero.
Synonym Mode
 1️⃣ The game starts with a countdown.
 2️⃣ A word appears on the screen.
 3️⃣ Type the antonym in the input box and submit.
 4️⃣ If correct, You gain 1 point & move to the next word.
 5️⃣ If incorrect, You can try again.
 6️⃣ The timer ⏳ continues to count down.
 7️⃣ The game ends when the timer reaches zero.
Can you get the highest score? 🤓💡

📂 Project Structure
📦 word-seed
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Home.jsx             # Landing Page
 ┃ ┃ ┣ 📜 Input.jsx            # Handles user input
 ┃ ┃ ┣ 📜 ScoreRegister.jsx    # Score tracking
 ┃ ┃ ┣ 📜 TimerCountdown.jsx   # Countdown logic
 ┃ ┃ ┣ 📜 GameMode.jsx         # Display Game options
 ┃ ┃ ┣ 📜 AntonymDisplay.jsx   # Displays the word for the antonym m
 ┃ ┃ ┣ 📜 AntonymMode.jsx   	#  Displays the Antonym Mode
 ┃ ┃ ┣ 📜 SynonymDisplay.jsx   # Displays the word for synonym
 ┃ ┃ ┣ 📜 SynonymMode.jsx       # Displays the Synonym Game
 ┃ ┃ ┣ 📜 DisplayQuestion.jsx   # Displays the Definitions
 ┃ ┃ ┗ 📜 GameOver.jsx          # Game over screen
 ┃ ┣ 📂 store
 ┃ ┃ ┣ 📜 Store.js            # State management (Zustand)
 ┃ ┃ ┣ 📜 antonymModeStore.js # State management (Zustand)to antonym
 ┃ ┃ ┗ 📜 synonymModeStore.js # State management (Zustand)to synonym
 ┃ ┣ 📜 App.jsx                 # Main App component
 ┃ ┣ 📜 main.jsx                # React root file
 ┃ ┗ 📜 index.css               # Global styles
 ┣ 📜 package.json              # Project metadata & dependencies
 ┣ 📜 README.md                 # Project documentation
 ┗ 📜 vite.config.js            # Vite configuration


🤝 Contributing
We welcome contributions! 🚀
 If you have ideas for improving the game, feel free to fork the repository and submit a pull request.

Steps to Contribute:
1. Fork the repository
2. Create a feature branch (git checkout -b feature-name)
3. Commit your changes (git commit -m "Added new feature")
4. Push to your branch (git push origin feature-name)
Open a pull request 🎉

📜 License
 Feel free to use, modify, and distribute it for educational purposes.

📧 Contact
If you have any questions or suggestions, reach out to:
 📩 Email: hdbeleive@gmail.com
 🐙 GitHub: github.com/Henny-D

Transform screen time into learning time with WordSeed! 🚀📚