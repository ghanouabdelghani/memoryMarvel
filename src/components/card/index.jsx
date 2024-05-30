import star from "../../assets/icons/card-front.svg";
import { styles } from "./styles";

export default function Card({ image, onPress }) {
  return (
    <div style={styles.main}>
      <img onClick={onPress} src={star} />
    </div>
  );
}
