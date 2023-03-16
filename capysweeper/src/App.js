import { BrowserRouter, Route, Routes } from "react-router-dom";
import audioSrc from '../src/resources/audios/audio-file.mp3';
import Levels from "./pages/Levels";
import Settings from "./pages/Settings";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Win from './pages/Win';
import Lose from './pages/Lose'
import Instructions from "./pages/Instructions";
import Missions from "./pages/Missions";

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
          <Route path="win" element={<Win />} />
          <Route path="win" element={<Win />} />
          <Route path="lose" element={<Lose />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="missions" element={<Missions />} />
          <Route />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
