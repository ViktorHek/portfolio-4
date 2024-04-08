import "./index.css";
// import { workExperience, intro } from "../../data/index";
// import intro from "../../data/intro";
import htmlList from "../../data/index";
// import workExperience from "../../data/workExperience";
import WusiwygEditor from "../wysiwygEditor/WusiwygEditor";
import DvdScreen from "../../data/DvdScreen";

function Container(props) {
  const { clickMin, clickClose, style, isMinimized, id, startDrag } = props;
  console.log({ htmlList });
  const { title, html, size, index } = htmlList[id]
    ? htmlList[id]
    : { title: "Say something", html: "This duddle has nothing to say atm.", size: null };
  let modStyle = size === "big" ? { ...style, left: 100, maxWidth: 800 } : style;

  return (
    <>
      {isMinimized ? (
        <div className="mini-app-container2">
          {/* <div className="mini-app-container" style={{ display: isClosed ? "none" : "block" }}> */}
          <div className="header-container2">
            <div className="header-min-btn2 btn2" onClick={() => clickMin(id)}>
              <span></span>
            </div>
            <span className="header-text2">{id === "editorDude" ? "editor" : title}</span>
            <div className="header-close-btn2 btn2" onClick={() => clickClose(id)}>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <div style={modStyle} id={`cc${id}`} draggable="true" onDragStart={startDrag}>
          <div className="app-container2">
            {/* <div className="app-container" style={{ display: isClosed ? "none" : "block" }}> */}
            <div className="app-inner-container2">
              <div className="header-container2">
                <div className="header-min-btn2 btn2" onClick={() => clickMin(id)}>
                  <span></span>
                </div>
                <span className="header-text2">{id === "editorDude" ? "editor" : title}</span>
                <div className="header-close-btn2 btn2" onClick={() => clickClose(id)}>
                  <span></span>
                  <span></span>
                </div>
              </div>
              {htmlList[id] ? (
                <div className="box2">
                  <div className="editor-backgrond2">
                    {html}
                    <div style={{ position: "absolute", bottom: 10, right: 28, color: "#a691df" }}>
                      {index}/27
                    </div>
                    {/* <div className="editor">{text}</div> */}
                  </div>
                </div>
              ) : (

                <WusiwygEditor />
                // { id: String === "dvdScreen" ? <DvdScreen /> : null }

                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Container;
