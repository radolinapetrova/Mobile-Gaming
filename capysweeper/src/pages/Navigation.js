import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Levels from "./Levels";
import Settings from "./Settings";
import Leaderboard from "./Leaderboard";
import Home from "./Home";
import Game from "./Game";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="game" element={<Game />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="levels" element={<Levels/>} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
