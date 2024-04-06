import "./index.css";
import { useState, useEffect } from "react";
import BigBg from "./animations/BigBg";
import SmallBg from "./animations/SmallBg";
// import wusiwygEditor from "./components/wysiwygEditor";
import Header from "./components/header/Header";
import Container from "./components/container/Container";

function App() {
  const basePos = {
    position: "absolute",
    zIndex: 10000,
    maxWidth: "500px",
    maxHeight: "500px",
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
  };
  const initCon = {
    title: "Welcome!",
    text: `<h1>Viktor Karlsson</h1><p>för att</p>`,
    isMinimized: false,
    pos: { ...basePos, top: 200, left: 200 },
    id: 1337,
  };

  const [atBottom, setAtBottom] = useState(false);
  const [conList, setConList] = useState([initCon]);

  useEffect(() => {
    const onscroll = () => {
      setAtBottom(document.body.scrollHeight === window.scrollY + window.innerHeight);
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
    let isClosed = conList
      .map((el) => {return el.id})
      .includes(id);
    if (!isClosed) {
      let arr = conList;
      arr.push({ title: "ny", text: "ny", isMinimized: false, pos: obj, id: id });
    }
  }

  function minimized(id) {
    let arr = conList;
    console.log({ arr });
    arr.forEach((el) => {
      if (el.id === id) {
        el.isMinimized = !el.isMinimized;
      }
    });
    setConList([]);
    setConList(arr);
    console.log({ arr });
    console.log({ conList });
  }

  function removeCon(id) {
    console.log({ id });
    let arr = [];
    conList.forEach((el) => {
      if (el.id !== id) {
        arr.push(el);
      }
    });
    setConList(arr);
    console.log({ arr });
    console.log({ conList });
  }

  return (
    <div className="App" style={{ width: "100%" }}>
      <div
        style={{
          position: "absolute",
          height: 100,
          top: 0,
          left: 0,
          width: "70%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}>
        <p style={{ fontSize: "2em", color: "#68f0fb", whiteSpace: "nowrap" }}>
          Viktor Karlsson === Front End Developer
        </p>
      </div>
      <Header />
      <div className="bg-container">
        <SmallBg clickBg={clickBg} />
      </div>
      {conList.length
        ? conList.map((con) => {
            return (
              <div
                style={
                  con.isMinimized
                    ? {
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        zIndex: 10000,
                        width: "100%",
                        display: "flex",
                        flexDirection: "row-reverse",
                      }
                    : con.pos
                }
                id={con.id}>
                <Container
                  clickMin={minimized}
                  clickClose={removeCon}
                  title={con.title}
                  text={con.text}
                  isMinimized={con.isMinimized}
                  id={con.id}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
