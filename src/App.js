import "./index.css";
import { useState, useEffect } from "react";
import BigBg from "./animations/BigBg";
import SmallBg from "./animations/SmallBg";
// import wusiwygEditor from "./components/wysiwygEditor";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
// import aiKeyWords from "./utils/aiKeyWords.html";

function App() {
  const basePos = {
    position: "absolute",
    zIndex: 10000,
    maxWidth: 800,
    minWidth: 300,
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto",
  };
  const initCon = {
    title: "Intro",
    text: (
      <div className="dd">
        <h1>tjo</h1>
        <p>bajs</p>
      </div>
    ),
    isMinimized: false,
    pos: { ...basePos, top: 200, left: 200 },
    id: "intro",
  };

  const [atBottom, setAtBottom] = useState(false);
  const [uppdate, setUpdate] = useState(false);
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
  // två personer har sagt att popup rutan ska vara i screen
  // separat window för varje jobb
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
      .map((el) => {
        return el.id;
      })
      .includes(id);
    if (!isClosed) {
      let arr = conList;
      arr.push({
        title: "Work Experience",
        text: (
          <div className="dd">
            <h1>tjo</h1>
            <p>bajs</p>
          </div>
        ),
        isMinimized: false,
        pos: obj,
        id: id,
      });
      setConList(arr);
      setUpdate(!uppdate);
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
    setConList(arr);
    setUpdate(!uppdate);
  }

  function removeCon(id) {
    let arr = [];
    conList.forEach((el) => {
      if (el.id !== id) {
        arr.push(el);
      }
    });
    setConList(arr);
  }

  function startDrag(event) {
    var style = window.getComputedStyle(event.target, null);
    var str =
      parseInt(style.getPropertyValue("left")) -
      event.clientX +
      "," +
      (parseInt(style.getPropertyValue("top")) - event.clientY) +
      "," +
      event.target.id;
    event.dataTransfer.setData("Text", str);
  }

  function drop(event) {
    var offset = event.dataTransfer.getData("Text").split(",");
    var dm = document.getElementById(offset[2]);
    dm.style.left = event.clientX + parseInt(offset[0], 10) + "px";
    dm.style.top = event.clientY + parseInt(offset[1], 10) + "px";
    dm.style.bottom = "auto";
    dm.style.right = "auto";
    event.preventDefault();
    return false;
  }

  function dragOver(event) {
    event.preventDefault();
    return false;
  }

  return (
    <div className="App" style={{ width: "100%" }} onDragOver={dragOver} onDrop={drop}>
      <div
        style={{
          position: "absolute",
          height: 100,
          top: 0,
          left: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginLeft: 30,
        }}>
        <p style={{ fontSize: "2.2em", color: "#41b4be", whiteSpace: "nowrap" }}>Viktor Karlsson</p>
        <p style={{ fontSize: "1.5em", color: "#41b4be", whiteSpace: "nowrap" }}>
          Front End Developer
        </p>
      </div>
      <Header />
      <div className="bg-container">
        <SmallBg clickBg={clickBg} />
      </div>
      {conList.length
        ? conList.map((con) => {
            if (!con.isMinimized) {
              return (
                <Container
                  clickMin={minimized}
                  clickClose={removeCon}
                  title={con.title}
                  text={con.text}
                  isMinimized={con.isMinimized}
                  // id={1337}
                  id={con.id}
                  style={con.pos}
                  startDrag={startDrag}
                />
              );
            }
          })
        : null}
      {conList.length ? (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            display: "flex",
            flexDirection: "row-reverse",
            flexWrap: "wrap-reverse",
            width: "100%",
            zIndex: 99999,
          }}>
          {conList.map((con) => {
            if (con.isMinimized) {
              return (
                <div
                  style={
                    {
                      // position: "fixed",
                      // bottom: 0,
                      // right: 0,
                      // zIndex: 10000,
                      // width: "100%",
                      // display: "flex",
                      // flexDirection: "row-reverse",
                    }
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
            }
          })}
        </div>
      ) : null}
      {/* <aiKeyWords /> */}
    </div>
  );
}

export default App;
