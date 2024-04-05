import "./index.css";


function Container(props) {

  const { clickMin, clickClose, title, text, isMinimized } = props;

  return (
    <>
      {isMinimized ? (
        <div className="mini-app-container">
          {/* <div className="mini-app-container" style={{ display: isClosed ? "none" : "block" }}> */}
          <div className="header-container">
            <div className="header-min-btn btn" onClick={() => clickMin()}>
              <span></span>
            </div>
            <span className="header-text">{title}</span>
            <div className="header-close-btn btn" onClick={() => clickClose()}>
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
              <div className="header-min-btn btn" onClick={() => clickMin()}>
                <span></span>
              </div>
              <span className="header-text">{title}</span>
              <div className="header-close-btn btn" onClick={() => clickClose()}>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="box">
              <div className="editor-backgrond">
                <div className="editor">
                  <p>{text}</p>
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
