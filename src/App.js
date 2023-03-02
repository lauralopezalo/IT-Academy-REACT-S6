import React, { useState } from "react";
import Escena from './components/escena/Escena';
import JSONfile from './text.json';
import Welcome from "./components/Welcome";

function App() {

  const [showWelcome, setShowWelcome] = useState(true);

  const handleStartButtonClick = () => { setShowWelcome(false) }

  return (
    <div>
      {showWelcome ? (<Welcome startButtonClick={handleStartButtonClick}/>) : (<Escena param={JSONfile}/>)}
    </div>
  );
}

export default App;
