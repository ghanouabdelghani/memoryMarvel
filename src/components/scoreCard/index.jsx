import React from "react";
import { styles } from "./styles";

export default function ScoreCard({ image, title, number }) {
  return (
    <div style={styles.main}>
      <div style={styles.imageContainer}>
        <img src={image} height="30px" width="30px" />
      </div>
      <p style={styles.textContainer}>
        {title} {number}
      </p>
    </div>
  );
}
