import "./index.css";
import { useEffect, useState } from "react";

function Container(props) {
  const { clickMin, clickClose, title, text, isMinimized, id, style, startDrag } = props;
  // const [isMin, setIsMin] = useState(isMinimized)
  const [sty, setSty] = useState(style)
  // function min(val){
  //   setIsMin(!isMin)
  //   clickMin(!val)
  // }
//   useEffect(() => {
//     dragElement(document.getElementById(id));
//   }, [isMinimized]);

//   // dragElement(document.getElementById(`cc${id}`));

//   function dragElement(elmnt) {
//     console.log("elmnt: ", elmnt);
//     var pos1 = 0,
//       pos2 = 0,
//       pos3 = 0,
//       pos4 = 0;
//     if (document.getElementById(`cc${id}`)) {
//       /* if present, the header is where you move the DIV from:*/
//       document.getElementById(`cc${id}`).onmousedown = dragMouseDown;
//     } else {
//       /* otherwise, move the DIV from anywhere inside the DIV:*/
//       elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       // set the element's new position:
// let obj = {...style,top: elmnt.offsetTop - pos2 + "px", left:elmnt.offsetLeft - pos1 + "px", bottom:'auto',right:'auto' }
//       // style.top = elmnt.offsetTop - pos2 + "px"
//       // style.left = elmnt.offsetLeft - pos1 + "px"
//       // elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//       // elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
// setSty(obj)
//     }
// }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }

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
        <div style={style} id={`cc${id}`} draggable="true" onDragStart={startDrag}>
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
        </div>
      )}
    </>
  );
}

export default Container;
