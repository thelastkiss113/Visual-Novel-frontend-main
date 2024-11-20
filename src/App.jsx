//frontend/src/App.jsx
//entry point for the frontend
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import GamePage from './pages/GamePage';
import StartNewGame from './pages/StartNewGame';
import LoadGame from './pages/LoadGame';
import './styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/start-new-game" element={<StartNewGame />} />
        <Route path="/load-game" element={<LoadGame />} />
        <Route path="/" element={<GamePage />} />
        <Route path="/home" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;