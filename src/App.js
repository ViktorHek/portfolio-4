import "./index.css";
import { useState } from "react";
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

  const initCon = {
    title: "Intro",
    isMinimized: false,
    index: 0,
    pos: isTablet ? basePos : { ...basePos, top: 200, left: 200 },
    id: "intro",
  };

  const [uppdate, setUpdate] = useState(false);
  const [collection, setCollection] = useState(["intro"]);
  const [conList, setConList] = useState([initCon]);

  function clickBg(event, id) {
    if (collection.includes(id) === false && id !== "easterEgg") {
      setCollection([...collection, id]);
    }
    let isClosed = conList
      .map((el) => {
        return el.id;
      })
      .includes(id);
    if (!isClosed) {
      const index = collection.includes(id)
        ? collection.findIndex((el) => el === id)
        : collection.length;
      if (id === "easterEgg") {
        addWindow(event, id, "x");
      } else {
        addWindow(event, id, index);
      }
    }
    console.log({ collection });
    if (collection.length === 26) {
      setTimeout(() => {
        addWindow(event, "final", 27);
      }, 400);
    }
  }

  function addWindow(event, id, index) {
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

    let arr = conList;
    arr.push({
      isMinimized: false,
      pos: obj,
      id: id,
      index: index,
    });
    setConList(arr);
    setUpdate(!uppdate);
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

  function clickFlower(id) {
    // let el = document.getElementById(id);
    // const y = el.getBoundingClientRect().top + window.scrollY;
    // window.scroll({
    //   top: y,
    //   behavior: "smooth",
    // });
    // el.scrollIntoView();
    let fakeEvent = { pageY: window.scrollY + 100, clientX: 100 };
    addWindow(fakeEvent, id, "x");
  }

  return (
    <div className="App" onDragOver={dragOver} onDrop={drop}>
      <div className="header-text-container">
        <p>Viktor Karlsson</p>
        <p>Front End Developer</p>
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
                  isMinimized={con.isMinimized}
                  id={con.id}
                  style={con.pos}
                  index={con.index}
                  clickMin={minimized}
                  clickClose={removeCon}
                  startDrag={startDrag}
                  clickFlower={clickFlower}
                  key={con.id}
                />
              );
            }
          })
        : null}
      {conList.length ? (
        <div className="minimized-main-container">
          {conList.map((con) => {
            if (con.isMinimized) {
              return (
                <div id={con.id}>
                  <Container
                    clickMin={minimized}
                    clickClose={removeCon}
                    isMinimized={con.isMinimized}
                    id={con.id}
                    key={con.id}
                  />
                </div>
              );
            }
          })}
        </div>
      ) : null}
      <div className="outer-king-container">
        <King />
      </div>
    </div>
  );
}

export default App;
