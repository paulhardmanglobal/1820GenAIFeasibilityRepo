import "./App.css";
import { Wavesurf } from "./visulisation/Wavesurf";
import { Visualizer } from "./visulisation/ReactAudioVisualise";
import { Player } from "./sound/Player";
import { Howler } from "./sound/Howler";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HowlerPlayer } from "./sound/HowlerPlayer";
import { GlobalAudioPlayer } from "./sound/GlobalAudioPlayer";
import { MVP } from "./pages/MVP";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mvp" element={<MVP />} /> {/* New route */}
        </Routes>
      </Router>
    </>
  );
}

export default App;

export const Home = () => {
  return (
    <>
      <h1>Base Models of the components need to be here</h1>
      <Howler />
      <HowlerPlayer />
      <Wavesurf />
      <Visualizer />
      <Player />
      <GlobalAudioPlayer />
      <h2>
        Basic Wave example with multiple waves here? Can I get them to load one
        at a time??
      </h2>
    </>
  );
};
