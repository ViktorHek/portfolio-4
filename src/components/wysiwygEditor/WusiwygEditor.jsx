import { useState, useEffect } from "react";
import useKeys from "./use-keys";
import HandleEditorFocus from "./HandleEditorFocus";
import Toolbar from "./components/Toolbar";
import handleKeys from "./funk/handleKeys";
import "./index.css";

function WusiwygEditor() {
  const { ref, isEditorFocused, setIsEditorFocused } = HandleEditorFocus(false);
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [pos, setPos] = useState("left");
  // const [isClosed, setIsClosed] = useState(false);
  // const [isMinimized, setIsMinimized] = useState(false);

  const arrowKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

  useEffect(() => {
    window.addEventListener("mousedown", clickOut);
    return () => {
      window.removeEventListener("mousedown", clickOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    document.addEventListener("selectionchange", selectionchange);
    return () => {
      document.removeEventListener("selectionchange", selectionchange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   document.addEventListener("select", handleSelect);
  //   return () => {
  //     document.removeEventListener("select", handleSelect);
  //   };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  function selectionchange(event) {
    return;
    // let section = document.getSelection();
    // let tes = section.toString();
    // let range = section.getRangeAt(0);
    // let position = section.getRangeAt(0).getBoundingClientRect();
  }

  useKeys((event) => {
    event.preventDefault();
    if (!isEditorFocused) return;
    let styles = getStyle();
    if (arrowKeys.includes(event.code)) {
      handleArrows(event.code);
    } else {
      handleKeys(event, styles);
    }
  });

  function handleArrows(key) {
    if (key === "ArrowRight") {
      movePlaceholder("right");
    } else {
      movePlaceholder("left");
    }
    // if (key === "ArrowLeft") {
    //   movePlaceholder("left");
    // }
  }

  function movePlaceholder(where) {
    const placeholder = document.getElementById("placeholder");
    const editor = document.getElementById("editor");
    let newPlaceHolder = document.createElement("p");
    newPlaceHolder.id = "placeholder";
    newPlaceHolder.className = "placeholder";

    const sibling = where === "left" ? "previousElementSibling" : "nextElementSibling";
    const child = where === "left" ? "lastChild" : "firstChild";
    const initChild = where === "left" ? "firstChild" : "lastChild";
    const pos = where === "left" ? "beforebegin" : "afterend";
    let target = undefined;
    if (placeholder[sibling]) {
      target = placeholder[sibling];
    } else {
      if (placeholder.parentElement[sibling]) {
        target = placeholder.parentElement[sibling][child];
      } else {
        if (placeholder.parentElement.parentElement[sibling]) {
          target = placeholder.parentElement.parentElement[sibling][child][child];
        } else {
          target = editor[initChild][initChild][initChild];
        }
      }
    }
    target.insertAdjacentElement(pos, newPlaceHolder);
    placeholder.remove();
  }

  function clickOut(event) {
    if (!isEditorFocused) return;
    if (!document.getElementById("placeholder")) return;
    if (event.target.parentElement === null) return;
    if (event.target.parentElement.parentElement === null) return;
    if (event.target.parentElement.parentElement.parentElement === null) return;
    if (
      event.target.parentElement.parentElement.parentElement === "editor" ||
      // event.target.parentElement.parentElement.id === "editor" ||
      // event.target.parentElement.id === "editor" ||
      event.target.id !== "editorbackground"
    ) {
      const tag = document.createElement("p");
      tag.id = "placeholder";
      tag.class = "placeholder";
      tag.className = "placeholder";
      console.log({ event });
      if (event.target.parentElement.parentElement.parentElement.id === "editor") {
        event.target.insertAdjacentElement("afterend", tag);
      } else {
        const editor = document.getElementById("editor");
        editor.lastChild.lastChild.appendChild(tag);
      }
      const placeholder = document.getElementById("placeholder");
      placeholder.remove();
    }
  }

  function getStyle() {
    let arr = [];
    if (italicActive) {
      arr.push({ type: "fontStyle", val: "italic" });
    }
    if (boldActive) {
      arr.push({ type: "fontWeight", val: "bold" });
    }
    return arr;
  }

  function newTag(type) {
    if (type === "italic") {
      setItalicActive(!italicActive);
    }
    if (type === "bold") {
      setBoldActive(!boldActive);
    }
  }

  function changePos(type) {
    setPos(type);
    const ph = document.getElementById("placeholder");
    switch (type) {
      case "left":
        ph.parentElement.parentElement.style.justifyContent = "flex-start";
        break;
      case "center":
        ph.parentElement.parentElement.style.justifyContent = "center";
        break;
      case "right":
        ph.parentElement.parentElement.style.justifyContent = "flex-end";
        break;
      case "strech":
        ph.parentElement.parentElement.style.justifyContent = "space-evenly";
        break;
      default:
        break;
    }
  }

  // function handleClickHeader(val) {
  //   if (val === "min") {
  //     setIsMinimized(!isMinimized);
  //   }
  //   if (val === "close") {
  //     setIsClosed(!isClosed);
  //   }
  // }

  return (
    <div
      id="box"
      ref={ref}
      onClick={() => setIsEditorFocused(true)}
      className={`${isEditorFocused ? "box-active " : ""} box`}>
      <Toolbar
        newTag={newTag}
        changePos={changePos}
        active={{
          boldActive: boldActive,
          italicActive: italicActive,
          pos: pos,
        }}
      />
      <div
        className={`${isEditorFocused ? "editor-backgrond-active " : ""} editor-backgrond`}
        id="editorbackground">
        <div
          id="editor"
          contentEditable={false}
          className={`${isEditorFocused ? "editor-active " : ""} editor`}>
          <span>
            <span>
              <span className="placeholder" id="placeholder"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default WusiwygEditor;
