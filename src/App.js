import React, { useState } from "react";
import Welcome from "./components/Welcome/Welcome";
import Escena from './components/Escena/Escena';
import history from './assets/history';
import { GlobalStyle } from './GlobalStyle';

function App() {

  const [showWelcome, setShowWelcome] = useState(true);

  const handleStartButtonClick = () => { setShowWelcome(false) }

  return (
    <div>
      <GlobalStyle />
      {showWelcome ? (<Welcome startButtonClick={handleStartButtonClick} />) : (<Escena param={history} />)}
    </div>
  );
}

export default App;
