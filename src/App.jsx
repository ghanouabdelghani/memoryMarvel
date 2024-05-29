import logo from "./logo.svg";
import "./App.css";
import GameInfos from "./projet/gameInfos.jsx";
import Card from "./projet/cards";
const nnn = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "30px",
};

function App() {
  return (
    <div style={nnn}>
      <div style={{ textAlign: "center", color: "white" }}>
        <h1>Memory Marvel</h1>
      </div>
      <GameInfos />
      <Card />
    </div>
  );
}

export default App;
