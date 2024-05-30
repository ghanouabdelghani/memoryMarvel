import { useState } from "react";
import star from "../../assets/icons/card-front.svg";
import { styles } from "./styles";

export default function Card({ image }) {
  const [flip, setFlip] = useState(star);

  return (
    <div style={styles.main}>
      <img onClick={() => setFlip(image)} src={flip} />
    </div>
  );
}
