Chess-StockFish
♟️ A clean and responsive chess application where you can play against a friend or challenge a powerful AI using the Stockfish engine.
The project focuses on simplicity, smooth gameplay, and accurate chess logic.

Live Demo: 🌐 https://chess-master-main.vercel.app

GitHub Repo: 📦 https://github.com/MohammedIhsaan28/Chess-StockFish

🌟 FEATURES

👫 Play vs Friend (Human vs Human) — Both players use the same device or browser.
🤖 Play vs AI (Human vs Computer) — Powered by Stockfish via REST API.
📱 Responsive UI — Works smoothly on desktop, tablet, and mobile.
🎨 Modern Design — Built using TypeScript, HTML, CSS, SCSS, Tailwind.
♟️ Accurate Move Validation — Follows official chess rules.
🖼️ Chess Piece Graphics — Official Lichess artwork used.

🛠️ TECH STACK

Languages: TypeScript, HTML, CSS, SCSS
Styling: Tailwind CSS + SCSS
Chess Engine: Stockfish API (https://stockfish.online/
)
Hosting: Vercel
Tools: Git, npm, build tools

🚀 GETTING STARTED

Prerequisites:
🟦 Node.js version 14 or above
📦 npm or yarn package manager

Installation Steps:

Clone the repository
git clone https://github.com/MohammedIhsaan28/Chess-StockFish.git

Navigate to folder
cd Chess-StockFish

Install dependencies
npm install
or
yarn install

Start development server
npm start
or
yarn start

Open in browser
http://localhost:3000

🎮 GAME MODES

👫 Human vs Human

Select Friend Mode

Both players take turns on the same board

Best for casual offline play

🤖 Human vs Computer

Select Computer Mode

Board sends FEN position to Stockfish

Stockfish API returns best move

Board updates automatically

🧠 HOW IT WORKS (ARCHITECTURE)

UI Layer
🎨 Handles board layout, clicks, and drag–drop interactions

Game Logic
♟️ Move validation, turn handling, checkmate detection

FEN Generator
📄 Updates board state in FEN format after every move

API Call to Stockfish
🌐 POST request sent to:
https://stockfish.online/api/s/v2.php

Stockfish Response
🤖 Receives best move
♟️ Move is applied automatically

UI Update
✨ Board animates and updates after AI move

📈 FUTURE IMPROVEMENTS

⏱️ Chess clock (timers)
🧠 AI difficulty levels
📝 Move history and PGN export
🌍 Online multiplayer using WebSockets
🎨 Themes (Dark/Light mode)
🔊 Sound effects for moves

🤝 CONTRIBUTING

Contributions are welcome!
🔹 Fork the project
🔹 Create a feature branch
🔹 Commit your changes
🔹 Push the branch
🔹 Open a Pull Request

📜 LICENSE

This project is licensed under the MIT License

🙏 ACKNOWLEDGEMENTS

💡 Stockfish Chess Engine (https://stockfishchess.org
)
♟️ Lichess piece assets
▲ Vercel hosting
❤️ Open-source community

📬 CONTACT

For questions or issues, open an issue on GitHub.
Enjoy the game! ♟️ Your next move awaits.
