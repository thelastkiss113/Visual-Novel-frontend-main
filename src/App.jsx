// frontend/src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import GamePage from "./pages/GamePage";
import StartNewGame from "./pages/StartNewGame";
import LoadGame from "./pages/LoadGame";
import SaveGamePage from "./pages/SaveGamePage";
import DeletePlayer from "./pages/DeletePlayer";  
import "./styles/App.css";

const App = () => {
  const [player, setPlayer] = useState(null); // Store player data in the state

  const createNewGame = (newPlayer) => {
    setPlayer(newPlayer); // Update the player data
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/start-new-game" element={<StartNewGame createNewGame={createNewGame} />} />
        <Route path="/load-game" element={<LoadGame setPlayer={setPlayer} />} />
        <Route path="/save-game" element={<SaveGamePage player={player} />} />
        <Route path="/delete-player" element={<DeletePlayer player={player} setPlayer={setPlayer} />} /> {/* Add DeletePlayer route */}
        <Route path="/" element={<GamePage player={player} />} />
        {/* <Route path="/home" element={<GamePage player={player} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
