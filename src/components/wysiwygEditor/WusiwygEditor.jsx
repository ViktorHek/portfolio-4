import { useState, useEffect } from "react";
import useKeys from "./use-keys";
import HandleEditorFocus from "./HandleEditorFocus";
import Header from "./components/Header";
import Toolbar from "./components/Toolbar";
import handleKeys from "./funk/handleKeys";
// import handleKeys from "./funk/handleKeys";
import appendTag from "./funk/appendTag";

function WusiwygEditor() {
  const { ref, isEditorFocused, setIsEditorFocused } = HandleEditorFocus(true);
  const [boldActive, setBoldActive] = useState(false);
  const [italicActive, setItalicActive] = useState(false);
  const [pos, setPos] = useState("left");
  const [isClosed, setIsClosed] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const specialKeys = ["space", "backspace", "enter"];
  const arrowKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

  useEffect(() => {
    window.addEventListener("mousedown", clickOut);
    return () => {
      window.removeEventListener("mousedown", clickOut);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("selectionchange", selectionchange);
    return () => {
      document.removeEventListener("selectionchange", selectionchange);
    };
  }, []);
  useEffect(() => {
    document.addEventListener("select", dick);
    return () => {
      document.removeEventListener("select", dick);
    };
  }, []);

  function selectionchange(event) {
    return;
    let section = document.getSelection();
    let tes = section.toString();
    let range = section.getRangeAt(0);
    let position = section.getRangeAt(0).getBoundingClientRect();
  }

  function dick(event) {
    console.log("dick: ", event);
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
    }
    if (key === "ArrowLeft") {
      movePlaceholder("left");
    }
  }

  function movePlaceholder(where) {
    let placeholder = document.getElementById("placeholder");
    let newPlaceHolder = document.createElement("p");
    newPlaceHolder.id = "placeholder";
    newPlaceHolder.class = "placeholder";
    newPlaceHolder.className = "placeholder";
    newPlaceHolder.name = "placeholder";
    const siblings = Array.from(placeholder.parentElement.children);
    const currentIndex = siblings.indexOf(placeholder);
    let sibling =
      where === "left" ? "previousElementSibling" : "nextElementSibling";
    let child = where === "left" ? "lastChild" : "firstChild";
    let ajust = where === "left" ? "beforebegin" : "afterend";
    let isWordStart = currentIndex === 1 && where === "left";
    let isWordEnd = currentIndex === siblings.length - 1 && where === "right";

    if (!isWordStart && !isWordEnd) {
      placeholder[sibling].insertAdjacentElement(ajust, newPlaceHolder);
      placeholder.remove();
    } else {
      const editor = document.getElementById("editor");
      const firstSibling = editor.firstChild.firstChild.firstChild
        .nextSibling || {
        id: null,
      };
      const lastEl = editor.lastChild.lastChild.lastChild;
      if (firstSibling.id === "placeholder" || lastEl.id === "placeholder") {
        return;
      }
      const target = placeholder.parentElement[sibling]
        ? placeholder.parentElement[sibling][child]
        : placeholder.parentElement.parentElement[sibling][child][child];
      target.insertAdjacentElement("afterend", newPlaceHolder);
      placeholder.remove();
    }
  }

  function clickOut(event) {
    if (!isEditorFocused) return;
    if (!document.getElementById("placeholder")) return;
    if (!event.target.parentElement) return;
    if (!event.target.parentElement.parentElement) return;
    if (!event.target.parentElement.parentElement.parentElement) return;
    const tag = document.createElement("p");
    const placeholder = document.getElementById("placeholder");
    placeholder.remove();
    tag.id = "placeholder";
    tag.class = "placeholder";
    tag.className = "placeholder";
    if (
      event.target.parentElement.parentElement.parentElement.id === "editor"
    ) {
      event.target.insertAdjacentElement("afterend", tag);
    } else {
      const editor = document.getElementById("editor");
      editor.lastChild.lastChild.appendChild(tag);
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

  function handleClickHeader(val) {
    if (val === "min") {
      setIsMinimized(!isMinimized);
    }
    if (val === "close") {
      setIsClosed(!isClosed);
    }
  }

  return (
    <>
      {isMinimized ? (
        <div
          className="mini-app-container"
          style={{ display: isClosed ? "none" : "block" }}
        >
          <Header handleClickHeader={handleClickHeader} />
        </div>
      ) : (
        <div
          className="app-container"
          style={{ display: isClosed ? "none" : "block" }}
        >
          <div className="app-inner-container">
            <Header handleClickHeader={handleClickHeader} />
            <div
              id="box"
              ref={ref}
              onClick={() => setIsEditorFocused(true)}
              className={`${isEditorFocused ? "box-active " : ""} box`}
            >
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
                className={`${
                  isEditorFocused ? "editor-backgrond-active " : ""
                } editor-backgrond`}
              >
                <div
                  id="editor"
                  contentEditable={false}
                  className={`${
                    isEditorFocused ? "editor-active " : ""
                  } editor`}
                >
                  <span>
                    <span>
                      <span className="placeholder" id="placeholder"></span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WusiwygEditor;
