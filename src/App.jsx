// frontend/src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import GamePage from "./pages/GamePage";
import StartNewGame from "./pages/StartNewGame";
import LoadGame from "./pages/LoadGame";
import "./styles/App.css";

const App = () => {
  const [player, setPlayer] = useState(null); // Store player data in the state

  // Function to set the player when a new player is created
  const createNewGame = (newPlayer) => {
    setPlayer(newPlayer); // Update the player data
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Start New Game */}
        <Route
          path="/start-new-game"
          element={<StartNewGame createNewGame={createNewGame} />}
        />

        {/* Load Game */}
        <Route path="/load-game" element={<LoadGame setPlayer={setPlayer} />} />
        {/* Save Game */}
        {/* <Route path="/save-game" element={<SaveGamePage player={player} />} /> */}
        {/* Home or GamePage */}
        <Route path="/" element={<GamePage player={player} />} />
        <Route path="/home" element={<GamePage player={player} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
