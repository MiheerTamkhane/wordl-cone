import "./App.css";
import { Board, Keyboard, GameOver, ThemeToggler } from "./components";
import { useBoard } from "./context/BoardProvider";
function App() {
  const { gameOver } = useBoard();
  return (
    <div className="app">
      <nav>
        <span className="title">Wordl</span> <ThemeToggler />
      </nav>
      <div className="game">
        <Board />
        {gameOver.over ? <GameOver /> : <Keyboard />}
      </div>
    </div>
  );
}

export default App;
