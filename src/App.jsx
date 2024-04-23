import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SoloGamesPage from "./components/SoloGamesPage";
import DuoGamesPage from "./components/DuoGamesPage";
import Tetris from "./components/SoloGames/Tetris";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/solo-section" element={<SoloGamesPage />} />
          <Route path="/duo-section" element={<DuoGamesPage />} />
          <Route path="/tetris" element={<Tetris />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
