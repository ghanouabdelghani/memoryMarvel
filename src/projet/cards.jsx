import React from "react";
import Card from "./card";
import airplan from "../assets/icons/airplane.svg";
import bath from "../assets/icons/bath-tub.svg";
import cocktail from "../assets/icons/cocktail.svg";
import hotel from "../assets/icons/hotel.svg";
import polaroid from "../assets/icons/polaroid.svg";

export default function Cards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 120px)" }}>
        
      <Card imge={airplan} />
      <Card imge={bath} />
      <Card imge={cocktail} />
      <Card imge={hotel} />
      <Card imge={polaroid} />
      <Card imge={airplan} />
      <Card imge={bath} />
      <Card imge={cocktail} />
      <Card imge={hotel} />
      <Card imge={polaroid} />
    </div>
  );
}
