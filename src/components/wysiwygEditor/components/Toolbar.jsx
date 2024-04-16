// import { useState, useEffect } from "react";
// import AlignAnimation from "../animations/AlignAnimation";
import "../styles/toolbar.css";

function Toolbar() {
// function Toolbar(props) {
  // const [boldActive, setBoldActive] = useState(props.active.boldActive);
  // const [italicActive, setItalicActive] = useState(props.active.italicActive);
  // const [pos, setPos] = useState(props.active.pos);
  // const [openPositionDropdown, setOpenPositionDropdown] = useState(false);

  // useEffect(() => {
  //   setBoldActive(props.active.boldActive);
  //   setItalicActive(props.active.italicActive);
  //   setPos(props.active.pos);
  // }, [props]);

  // function handleOpenDropdown(type) {
  //   if (type === "pos") {
  //     setOpenPositionDropdown(!openPositionDropdown);
  //   }
  // }

  // function changePos(pos) {
  //   if (openPositionDropdown) {
  //     setOpenPositionDropdown(!openPositionDropdown);
  //   }
  //   props.changePos(pos);
  // }

  return (
    <>
      <div className="top-toolbar">
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Tools</span>
        <span>Help</span>
      </div>
      {/* <div id="toolbar" className="toolbar">
        <div
          id="bold"
          onClick={() => props.newTag("bold")}
          className={`btn ${boldActive ? "btn-active" : ""}`}
        >
          <strong>B</strong>
        </div>
        <div
          id="italic"
          onClick={() => props.newTag("italic")}
          className={`btn ${italicActive ? "btn-active" : ""}`}
        >
          <p style={{ fontStyle: "italic" }}>I</p>
        </div>
        <div style={{ position: "relative", height: "100%" }}>
          <div
            onClick={() => handleOpenDropdown("pos")}
            className={`btn ${openPositionDropdown ? "btn-dropdown-open" : "btn-dropdown"}`}
          >
            {openPositionDropdown ? (
              <div className="dropdown-list">
                <span onClick={() => changePos("left")}>
                  <AlignAnimation type={"left"} />{" "}
                </span>
                <span onClick={() => changePos("center")}>
                  <AlignAnimation type={"center"} />{" "}
                </span>
                <span onClick={() => changePos("right")}>
                  <AlignAnimation type={"right"} />{" "}
                </span>
                <span onClick={() => changePos("strech")}>
                  <AlignAnimation type={"strech"} />{" "}
                </span>
              </div>
            ) : (
              <div style={{ height: "18px", width: "18px" }}>
                <AlignAnimation type={pos} />
              </div>
            )}
            <span className="arrow-down"></span>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Toolbar;
