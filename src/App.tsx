import React from "react";
import "./App.css";
import SoundBlock from "./components/ui/SoundBlock";
import Laser from "./components/laser/Laser";

function App() {
  return (
    <div className="App">
      <Laser />
      <SoundBlock />
    </div>
  );
}

export default App;
