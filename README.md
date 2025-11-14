
📘 Chess-StockFish

Chess-StockFish is a modern and responsive chess game built with TypeScript, Tailwind CSS, and a powerful Stockfish engine integration.
It allows users to play chess against a friend or challenge an AI powered by the Stockfish REST API.
The game features smooth interactions, accurate move validation, and a user-friendly interface optimized for all devices.



🚀 CORE TECHNOLOGIES

• TypeScript – Strongly typed JavaScript for scalable development
• HTML / CSS / SCSS – Structure and styling
• Tailwind CSS – Utility-first responsive design
• Stockfish Engine API – AI-powered move calculations
• Vercel – Fast and reliable deployment
• JavaScript ES Modules – Better code organization
• Git & npm – Version control and package management



✨ APPLICATION FEATURES

♟️ Human vs Human (Local Multiplayer)
• Play with a friend on the same device
• Smooth, interactive board movement
• Ideal for offline casual matches

🤖 Human vs Computer (AI Mode)
• Powered by the Stockfish API
• Sends FEN to Stockfish and receives best move instantly
• Plays strong and accurate AI chess

🧠 Chess Logic & Move Validation
• Validates legal moves
• Detects check, checkmate, and special rules
• Ensures authentic chess gameplay

📱 Responsive and Modern UI
• Built with Tailwind CSS
• Fast and lightweight experience
• Works smoothly on mobile, tablet, and desktop

🖼️ High-Quality Piece Graphics
• Uses official Lichess piece set for professional visuals



⚡ GETTING STARTED

Prerequisites:
• Node.js version 14 or higher
• npm or yarn package manager

Installation:

Clone the repository:
git clone https://github.com/MohammedIhsaan28/Chess-StockFish.git

Navigate to the project:
cd Chess-StockFish

Install dependencies:
npm install
or
yarn install

Start the development server:
npm start
or
yarn start

Open the application in your browser:
http://localhost:3000




🧠 HOW IT WORKS (ARCHITECTURE)

UI Layer
• Board rendering
• Click and drag-drop controls
• Smooth animations

Game Logic
• Move generation and validation
• Turn handling
• Check and checkmate detection

FEN Generator
• Updates board state after every move
• Sends FEN to the AI engine

Stockfish API
POST request to:
https://stockfish.online/api/s/v2.php

• Receives best possible move
• Updates board automatically



🛠️ FUTURE ENHANCEMENTS

• Chess clock (timers)
• Move history + PGN export
• Online multiplayer using WebSockets
• Light / Dark theme switcher
• Sound effects for moves



🤝 CONTRIBUTING

Contributions are welcome!
• Fork the project
• Create a new feature branch
• Make changes and commit
• Push the branch
• Submit a pull request



🙏 ACKNOWLEDGMENTS

• Stockfish Engine – https://stockfishchess.org
• Lichess Assets – https://lichess.org
• Tailwind CSS – https://tailwindcss.com
• Vercel – https://vercel.com
• Open-source community ❤️



📬 CONTACT

For bugs, issues, or suggestions, open an issue on GitHub.
Enjoy playing Chess! ♟️ Your next move awaits.