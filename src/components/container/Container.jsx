import "./index.css";
// import { workExperience, intro } from "../../data/index";
// import intro from "../../data/intro";
import htmlList from "../../data/index";
// import workExperience from "../../data/workExperience";
import WusiwygEditor from "../wysiwygEditor/WusiwygEditor";

function Container(props) {
  const { clickMin, clickClose, style, isMinimized, id, startDrag } = props;
  const { title, html, size } =
    id === "editorDude" ? { title: null, html: null, size: null } : htmlList[id];
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
              {id === "editorDude" ? (
                <WusiwygEditor />
              ) : (
                <div className="box2">
                  <div className="editor-backgrond2">
                    {html}
                    <div style={{ position: "absolute", bottom: 10, right: 28, color: "#a691df" }}>
                      {id === 1337 ? 0 : id}/27
                    </div>
                    {/* <div className="editor">{text}</div> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Container;
