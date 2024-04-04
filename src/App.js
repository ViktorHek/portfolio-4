import "./index.css";
import { useState } from "react";
import BigBg from "./animations/BigBg";
import SmallBg from "./animations/SmallBg";
// import wusiwygEditor from "./components/wysiwygEditor";
import Header from "./components/header/Header";

function App() {
  const [isWideScreen, setIsWideScreen] = useState(false);

  return (
    <div className="App" style={{width: '100%'}}>
      <Header/>
      <div className="bg-container" style={{width: '100%', margin: '0px auto'}}>{isWideScreen ? <BigBg /> : <SmallBg />}</div>
      {/* <wusiwygEditor /> */}
    </div>
  );
}

export default App;
