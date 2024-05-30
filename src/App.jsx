import "./App.css";
import GameInfos from "./pages/gameInfos.jsx";
import Card from "./pages/board";

const main = {
  gap: "20px",
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
};

function App() {
  return (
    <div style={main}>
      <p
        style={{
          color: "white",
          fontSize: "40px",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        Memory Marvel
      </p>
      <GameInfos />
      <Card />
    </div>
  );
}

export default App;
