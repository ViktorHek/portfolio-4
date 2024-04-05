import "./index.css";
import { useState } from "react";
import BigBg from "./animations/BigBg";
import SmallBg from "./animations/SmallBg";
// import wusiwygEditor from "./components/wysiwygEditor";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

function App() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  return (
    <div className="App" style={{ width: "100%" }}>
      <Header />
      <div className="bg-container">{isWideScreen ? <BigBg /> : <SmallBg />}</div>
      {/* <wusiwygEditor /> */}
      <div style={{ position: "absolute", top: 100, left: 100, zIndex: 10000 }}>
        <Container />
      </div>
    </div>
  );
}

export default App;
