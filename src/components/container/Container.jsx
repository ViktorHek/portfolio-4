import "./index.css";
// import { workExperience, intro } from "../../data/index";
// import intro from "../../data/intro";
import htmlList from "../../data/index";
// import workExperience from "../../data/workExperience";

function Container(props) {
  console.log({ htmlList });
  const { clickMin, clickClose, style, isMinimized, id, startDrag } = props;
  const { title, html, size } = htmlList[htmlList.idHelper.find((el) => el.id === id).name];
  let modStyle = size === "big" ? { ...style, left: 100, maxWidth: 800 } : style;

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
        <div style={modStyle} id={`cc${id}`} draggable="true" onDragStart={startDrag}>
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
                  {html}
                  <div style={{ position: "absolute", bottom: 8, right: 15, color: "#a691df" }}>
                    {id === 1337 ? 0 : id}/27
                  </div>
                  {/* <div className="editor">{text}</div> */}
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
