import React from "react";

export default function ScoreCard({ image, text }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          border: "solid 1px black",
          background: "white",
          borderRadius: "50px",
          border: "none",
          width: "60px",
          height: "60px",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          left: "1px",
        }}
      >
        <img src={image} height="30px" width="30px" />
      </div>
      <div>
        <p
          style={{
            border: "solid 1px black",
            background: "white",
            borderRadius: "50px",
            border: "none",
            width: "200px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
