import React from "react";
import ScoreCard from "../components/scoreCard";
import Timer from "../assets/icons/flip.svg";
import Medal from "../assets/icons/medal.svg";
import StopWatch from "../assets/icons/stopwatch.svg";

const infoData = [
  {
    image: Medal,
    title: "Score:",
  },
  {
    image: Timer,
    title: "Flips:",
  },
  {
    image: StopWatch,
    title: "Timer:",
  },
];

export default function GameInfos() {
  return (
    <div
      style={{
        gap: "40px",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {infoData.map((item) => (
        <ScoreCard image={item.image} title={item.title} />
      ))}
    </div>
  );
}
