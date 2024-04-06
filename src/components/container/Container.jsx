import "./index.css";
import { useState } from "react";

function Container(props) {
  console.log(props);
  const { clickMin, clickClose, title, text, isMinimized, id } = props;
  // const [isMin, setIsMin] = useState(isMinimized)

  // function min(val){
  //   setIsMin(!isMin)
  //   clickMin(!val)
  // }

  return (
    <>
      {isMinimized ? (
        <div className="mini-app-container">
          {/* <div className="mini-app-container" style={{ display: isClosed ? "none" : "block" }}> */}
          <div className="header-container">
            <div className="header-min-btn btn" onClick={() => clickMin(id)}>
              <span></span>
            </div>
            <span className="header-text">{title}</span>
            <div className="header-close-btn btn" onClick={() => clickClose(id)}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="app-container">
          {/* <div className="app-container" style={{ display: isClosed ? "none" : "block" }}> */}
          <div className="app-inner-container">
            <div className="header-container">
              <div className="header-min-btn btn" onClick={() => clickMin(id)}>
                <span></span>
              </div>
              <span className="header-text">{title}</span>
              <div className="header-close-btn btn" onClick={() => clickClose(id)}>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="box">
              <div className="editor-backgrond">
                <div className="editor">{text}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Container;
