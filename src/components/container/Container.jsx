import { useState, useEffect } from "react";
import "./index.css";

function Container() {
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const shit = "Hello. To interact with the site, close this";
  
  // const [text, setText] = useState("");
  // let index = 0;
  // useEffect(() => {
  //   writeText();
  // }, []);

  // function writeText() {
  //   let min = 5;
  //   let max = 10;
  //   var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
  //   index = index + 1
  //   setText(shit.slice(0,index))
  //   if(text.length > shit.length) {
  //     setTimeout(writeText, rand * 100);
  //   }
  // }

  return (
    <>
      {isMinimized ? (
        <div className="mini-app-container" style={{ display: isClosed ? "none" : "block" }}>
          <div className="header-container">
            <div className="header-min-btn btn" onClick={() => setIsMinimized(!isMinimized)}>
              <span></span>
            </div>
            <span className="header-text">TinyHans</span>
            <div className="header-close-btn btn" onClick={() => setIsClosed(!isClosed)}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="app-container" style={{ display: isClosed ? "none" : "block" }}>
          <div className="app-inner-container">
            <div className="header-container">
              <div className="header-min-btn btn" onClick={() => setIsMinimized(!isMinimized)}>
                <span></span>
              </div>
              <span className="header-text">TinyHans</span>
              <div className="header-close-btn btn" onClick={() => setIsClosed(!isClosed)}>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="box">
              <div className="editor-backgrond">
                <div className="editor">
                  <p style={{ animation: `typing 5s steps(${shit.length})` }}>{shit}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Container;
