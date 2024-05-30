import React from "react";
import ScoreCard from "../components/scoreCard";
import Timer from "../assets/icons/flip.svg";
import Medal from "../assets/icons/medal.svg";
import StopWatch from "../assets/icons/stopwatch.svg";

export default function GameInfos({ count, timer }) {
  const infoData = [
    {
      number: 0,
      image: Medal,
      title: "Score:",
    },
    {
      image: Timer,
      number: count,
      title: "Flips:",
    },
    {
      number: timer,
      title: "Timer:",
      image: StopWatch,
    },
  ];

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
        <ScoreCard image={item.image} title={item.title} number={item.number} />
      ))}
    </div>
  );
}
