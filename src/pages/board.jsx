import React from "react";
import Card from "../components/card";
import airplane from "../assets/icons/airplane.svg";
import bath from "../assets/icons/bath-tub.svg";
import cocktail from "../assets/icons/cocktail.svg";
import hotel from "../assets/icons/hotel.svg";
import polaroid from "../assets/icons/polaroid.svg";

const cardData = [
  {
    image: airplane,
  },
  {
    image: bath,
  },
  {
    image: cocktail,
  },
  {
    image: hotel,
  },
  {
    image: polaroid,
  },
  {
    image: airplane,
  },
  {
    image: bath,
  },
  {
    image: cocktail,
  },
  {
    image: hotel,
  },
  {
    image: polaroid,
  },
];

export default function Board({ onCardPress }) {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(5, 170px)",
      }}
    >
      {cardData.map((item) => (
        <Card image={item.image} onPress={onCardPress} />
      ))}
    </div>
  );
}
