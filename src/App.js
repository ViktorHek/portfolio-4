import "./index.css";
import { useState, useEffect } from "react";
import SmallBg from "./animations/SmallBg";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import King from "./animations/King";

function App() {
  const isTablet = window.innerWidth < 768;
  const basePos = isTablet
    ? {
        position: "fixed",
        zIndex: 10000,
        maxWidth: "90%",
        minWidth: "30%",
        top: 100,
        bottom: "auto",
        left: "5%",
        right: "auto",
      }
    : {
        position: "absolute",
        zIndex: 10000,
        maxWidth: 800,
        minWidth: 400,
        top: "auto",
        bottom: "auto",
        left: "auto",
        right: "auto",
      };

  console.log("i w: ", window.innerWidth);
  const initCon = {
    title: "Intro",
    isMinimized: false,
    pos: isTablet ? basePos : { ...basePos, top: 200, left: 200 },
    id: "intro",
  };

  const [uppdate, setUpdate] = useState(false);
  const [collection, setCollection] = useState([]);
  const [conList, setConList] = useState([initCon]);
  const [count, setCount] = useState(1);

  function clickBg(event, id) {
    setCollection([...collection, id]);
    let toWide = event.clientX > 600;
    let toLow = document.body.scrollHeight - (window.scrollY + window.innerHeight) < 500;
    let obj = isTablet
      ? basePos
      : {
          ...basePos,
          top: toLow ? "auto" : event.pageY,
          left: toWide ? "auto" : event.clientX,
          bottom: toLow ? 50 : "auto",
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

  function clickFlower(event, id) {
    let el = document.getElementById(id);
    console.log({ el });
    const y = el.getBoundingClientRect().top + window.scrollY;
    // window.scroll({
    //   top: y,
    //   behavior: "smooth",
    // });
    el.scrollIntoView();
    let fakeEvent = { pageY: window.scrollY + 100, clientX: 100 };
    clickBg(fakeEvent, id);
  }

  function getIndex(id) {
    return conList.findIndex((el) => el.id === id);
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
          zIndex: 999,
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
                  isMinimized={con.isMinimized}
                  id={con.id}
                  style={con.pos}
                  startDrag={startDrag}
                  clickFlower={clickFlower}
                  index={getIndex(con.id)}
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
                <div id={con.id}>
                  <Container
                    clickMin={minimized}
                    clickClose={removeCon}
                    isMinimized={con.isMinimized}
                    id={con.id}
                  />
                </div>
              );
            }
          })}
        </div>
      ) : null}
      <div
        className="outer-king-container"
        // style={{ width: 100, height: 100, position: "absolute", bottom: 0, right: 20 }}>
      >
        <King />
      </div>
    </div>
  );
}

export default App;
