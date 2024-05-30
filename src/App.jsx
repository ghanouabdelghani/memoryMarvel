import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import GameInfos from "./pages/gameInfos.jsx";
import Board from "./pages/board";

const main = {
  gap: "20px",
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
};

function App() {
  const [flipCount, setFlipCount] = useState(0);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [timer]);

  const handleCardPress = useCallback(() => {
    setFlipCount((prevCount) => prevCount + 1);

    // NDECLAUNCHIW THE TIMER EL KHATRA LEWLA
  }, []);

  return (
    <div style={main}>
      <p
        style={{
          color: "white",
          fontSize: "40px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Memory Marvel
      </p>
      <GameInfos count={flipCount} timer={timer} />
      <Board onCardPress={handleCardPress} />
    </div>
  );
}

export default App;
