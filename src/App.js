import React, { useState } from "react";
import Escena from './components/escena/Escena';
import history from './assets/history';
import Welcome from "./components/Welcome";

function App() {

  const [showWelcome, setShowWelcome] = useState(true);

  const handleStartButtonClick = () => { setShowWelcome(false) }

  return (
    <div>
      {showWelcome ? (<Welcome startButtonClick={handleStartButtonClick}/>) : (<Escena param={history}/>)}
    </div>
  );
}

export default App;
