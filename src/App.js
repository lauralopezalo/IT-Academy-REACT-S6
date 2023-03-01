import './App.css';
import Escena from './components/escena/Escena';
import JSONfile from './text.json';

function App() {

  return (
    <div>
      <Escena param={JSONfile}></Escena>
    </div>
  );
}

export default App;
