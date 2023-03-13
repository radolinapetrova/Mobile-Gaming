import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from './pages/Navigation';
import Levels from "./pages/Levels";
import Settings from "./pages/Settings";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Game from "./pages/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="game" element={<Game />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="levels" element={<Levels/>} />
          <Route />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
