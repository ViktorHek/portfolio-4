import "./index.css";
import { useState } from "react";
import BigBg from "./animations/BigBg";
import SmallBg from "./animations/SmallBg";
// import wusiwygEditor from "./components/wysiwygEditor";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

function App() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [text, setText] = useState("text");
  const [title, setTitle] = useState("title");
  const [conPos, setConPos] = useState({
    position: "fixed",
    top: 200,
    left: 200,
    zIndex: 10000,
    maxWidth: "500px",
    maxHeight: "500px",
  });

  function clickBg(event, id) {
    console.log("event: ", event);
    console.log("event2: ", window);
    let toWide = event.pageX > 1000;
    let toLow = event.pageY > 1000;

    setConPos({
      position: "fixed",
      top: toLow ? "auto" : y,
      bottom: toLow ? y : "auto",
      left: toWide ? "auto" : x,
      right: toWide ? x : "auto",
      zIndex: 10000,
      maxWidth: "500px",
      maxHeight: "500px",
    });

    if (!isOpen) {
      setIsOpen(!isOpen);
    }
  }

  return (
    <div className="App" style={{ width: "100%" }}>
      <Header />
      <div className="bg-container">
        <SmallBg clickBg={clickBg} />
      </div>
      {/* <wusiwygEditor /> */}
      {isOpen ? (
        <div
          style={
            isMinimized
              ? {
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  zIndex: 10000,
                  width: "100%",
                  display: "flex",
                  flexDirection: "row-reverse",
                }
              : conPos
          }
          id="containercontainer">
          <Container
            clickMin={() => setIsMinimized(!isMinimized)}
            clickClose={() => setIsOpen(!isOpen)}
            title={title}
            text={text}
            isMinimized={isMinimized}
          />
        </div>
      ) : null}{" "}
    </div>
  );
}

export default App;
