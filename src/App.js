import "./index.css";
import { useState, useEffect } from "react";
import BigBg from "./animations/BigBg";
import SmallBg from "./animations/SmallBg";
// import wusiwygEditor from "./components/wysiwygEditor";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

function App() {
  const basePos = {
    position: "fixed",
    zIndex: 10000,
    maxWidth: "500px",
    maxHeight: "500px",

    top: "50%",
    bottom: "auto",
    left: "50%",
    right: "auto",

    transform: "translate(-50%, -50%)",
  };


  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [text, setText] = useState("text");
  const [title, setTitle] = useState("title");
  const [conPos, setConPos] = useState({
    position: "absolute",
    top: 200,
    left: 200,
    zIndex: 10000,
    maxWidth: "500px",
    maxHeight: "500px",
  });

  useEffect(() => {
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;
      if (isReachBottom) {
        setAtBottom(true)
      } else {
        setAtBottom(false)
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);


  function clickBg(event, id) {
    let toWide = event.clientX > 600;
    let obj = {
      ...basePos,
      top: atBottom ? "auto" : event.pageY,
      left: toWide ? "auto" : event.clientX,
      bottom: atBottom ? 50 : "auto",
      right: toWide ? window.innerWidth - event.clientX : "auto",
    };
    setConPos(obj);
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
                  position: "fixed",
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
      ) : null}
    </div>
  );
}

export default App;
