import { useState } from "react";
import start from "../assets/icons/card-front.svg";

export default function Card({ imge }) {
  const [flipe, setflipe] = useState(start);
  return (
    <div>
      <img onClick={() => setflipe(imge)} src={flipe} />
    </div>
  );
}
