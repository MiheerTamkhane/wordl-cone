import "./App.css";
import { Board, Keyboard } from "./components";

function App() {
  return (
    <div className="app">
      <nav>Wordl</nav>
      <div className="game">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
