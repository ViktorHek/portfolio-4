import { useState, useEffect, useRef } from "react";

function HandleEditorFocus(init) {
  const [isEditorFocused, setIsEditorFocused] = useState(init)
  const ref = useRef(null)
  function handleClickOutsideEditor(event) {
    if(ref.current && !ref.current.contains(event.target)) {
      setIsEditorFocused(false)
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideEditor, true);
    return () => {
      document.removeEventListener("click", handleClickOutsideEditor, true);
    };
  });
  return { ref, isEditorFocused, setIsEditorFocused };
}

export default HandleEditorFocus