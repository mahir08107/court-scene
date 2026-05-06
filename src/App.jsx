import { useState } from "react";
import GameWrapper from "./components/GameWrapper.jsx";
import GameOver from "./components/GameOver.jsx";

function App() {
  const [isGameOver, setGameOver] = useState(false);
  const [days, setDays] = useState(0);

  const handleGameOver = (finalDays) => {
    setDays(finalDays);
    setGameOver(true);
  };

  return (
    <>{isGameOver ? <GameOver daysSurvived={days} /> : <GameWrapper onGameOver={handleGameOver} />}</>
  );
}

export default App;
