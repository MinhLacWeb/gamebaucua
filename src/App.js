import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import GameBauCua from './gameBauCua/game/GameBauCua';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App">
      <GameBauCua />
      
    </div>
  );
}

export default App;
