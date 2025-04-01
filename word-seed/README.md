Word-Seed - Play & Learn 🧠🎮
Welcome to Word-Seed - Play & Learn, an interactive game where players/kids test their vocabulary skills by finding words, seeing the definition of the word and also finding synonyms and  antonyms for given words before time runs out! 🚀
This game is a part of the Code-Seed project I envisioned, designed to make coding and learning fun, engaging, and educational for kids.

📜 Table of Contents
About the Project


Features


Technologies Used


Installation & Setup


Game Rules


Project Structure


Contributing


License


Contact

🏆 About the Project
WordSeed - Play & Learn is a web-based game where players are presented with three modes/ categories. 
The vocabulary game (Where Presented with definition and players need to find the word)
Antonym Mode presented with a word and must guess its antonym. 
Synonym Mode presented with a word and must guess its synonym. 
The first mode leverages a store to fetch data while the next two leverages real-time API data to fetch antonyms, making every round unique and educational.
The project is built using React, ensuring a smooth and responsive gameplay experience.

✨ Features
✔️  Random definition and word generation
 ✔️ API-based antonym and synonym fetching
 ✔️ Score tracking system
 ✔️ Countdown timer ⏳
 ✔️ Game over and restart functionality
 ✔️ Interactive feedback messages ( Correct! /  Wrong! Try again.)
 ✔️ Simple and intuitive UI
 ✔️ Optimized for desktop and mobile

🛠 Technologies Used
Frontend: React, Tailwind CSS


State Management: Zustand


API: DictionaryAPI


Routing: React Router


Build Tool: Vite



🚀 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/Henny-D/capstone-project.git
cd word-seed

2️⃣ Install Dependencies
npm install

3️⃣ Start the Development Server
npm run dev

The app will be available at http://localhost:5174/.

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
 ┃ ┃ ┣ 📜 Home.jsx                      # Landing Page
 ┃ ┃ ┣ 📜 Input.jsx                       # Handles user input
 ┃ ┃ ┣ 📜 ScoreRegister.jsx         # Score tracking
 ┃ ┃ ┣ 📜 TimerCountdown.jsx   # Countdown logic
 ┃ ┃ ┣ 📜 GameMode.jsx            # Display Game options
 ┃ ┃ ┣ 📜 AntonymDisplay.jsx    # Displays the word for the antonym m
 ┃ ┃ ┣ 📜 AntonymMode.jsx      #  Displays the Antonym Mode
 ┃ ┃ ┣ 📜 SynonymDisplay.jsx    # Displays the word for synonym
 ┃ ┃ ┣ 📜 SynonymMode.jsx      # Displays the Synonym Game
 ┃ ┃ ┣ 📜 DisplayQuestion.jsx    # Displays the Definitions
 ┃ ┃ ┗ 📜 GameOver.jsx             # Game over screen
 ┃ ┣ 📂 store
 ┃ ┃ ┣ 📜 Store.js                             # State management (Zustand)
 ┃ ┃ ┣ 📜 antonymModeStore.js     # State management (Zustand)to antonym
 ┃ ┃ ┗ 📜 synonymModeStore.js     # State management (Zustand)to synonym
 ┃ ┣ 📜 App.jsx                  # Main App component
 ┃ ┣ 📜 main.jsx                # React root file
 ┃ ┗ 📜 index.css              # Global styles
 ┣ 📜 package.json            # Project metadata & dependencies
 ┣ 📜 README.md            # Project documentation
 ┗ 📜 vite.config.js            # Vite configuration


🤝 Contributing
We welcome contributions! 🚀
 If you have ideas for improving the game, feel free to fork the repository and submit a pull request.
Steps to Contribute:
Fork the repository


Create a feature branch (git checkout -b feature-name)


Commit your changes (git commit -m "Added new feature")


Push to your branch (git push origin feature-name)


Open a pull request 🎉



📜 License
This project is licensed under the MIT License.
 Feel free to use, modify, and distribute it for educational purposes.

📧 Contact
If you have any questions or suggestions, reach out to:
 📩 Email: hdbeleive@gmail.com
 🐙 GitHub: github.com/Henny-D


