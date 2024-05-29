import React from "react";
import ScoreCard from "./scoreCard";
import Timer from "../assets/icons/flip.svg";
import Medail from "../assets/icons/medal.svg";
import stopWatch from "../assets/icons/stopwatch.svg";

export default function GameInfos() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <ScoreCard image={Timer} text="timer:" />
        <ScoreCard image={Medail} text="score:" />
        <ScoreCard image={stopWatch} text="flips:" />
      </div>
    </div>
  );
}
