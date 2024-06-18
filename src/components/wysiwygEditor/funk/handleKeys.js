const defaultTag = {
  type: "span",
  html: "",
  id: "",
  className: "",
  styles: [],
};

function handleKeys(key, styles) {
  const placeholder = document.getElementById("placeholder");
  const editor = document.getElementById("editor");
  if (
    !placeholder ||
    !editor ||
    !placeholder.parentElement ||
    !placeholder.parentElement.parentElement
  )
    return;
  if (["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(key)) {
    movePlaceholder(key);
    return;
  }
  switch (key) {
    case `Key${key.slice(-1)}`:
      const letterTag = createTag({
        ...defaultTag,
        type: "p",
        html: key.replace("Key", "").toLowerCase(),
        styles: styles,
      });
      if (placeholder.parentElement?.className === "space") {
        const tag = createTag({
          ...defaultTag,
          html:
            letterTag.outerHTML +
            '<p className="placeholder" class="placeholder" id="placeholder"></p>',
        });
        placeholder.parentElement.insertAdjacentElement("afterend", tag);
        placeholder.remove();
      } else {
        placeholder.insertAdjacentElement("beforebegin", letterTag);
      }
      break;
    case "Space":
      const spaceTag = createTag({
        ...defaultTag,
        html: '<p>&nbsp;</p><p class="placeholder" id="placeholder"></p>',
        className: "space",
      });
      if (placeholder?.nextElementSibling) {
        const tempTag = document.createElement("span");
        placeholder.parentElement.insertAdjacentElement("afterend", tempTag);
        let arr = ["", ""];
        const i = Array.from(placeholder.parentElement.children).indexOf(placeholder);
        Array.prototype.forEach.call(placeholder.parentElement.children, function (el, index) {
          arr[index < i ? 0 : 1] += el.id === "placeholder" ? "" : el.outerHTML;
        });
        tempTag.insertAdjacentElement("beforebegin", createTag({ ...defaultTag, html: arr[0] }));
        tempTag.insertAdjacentElement("beforebegin", spaceTag);
        tempTag.insertAdjacentElement("beforebegin", createTag({ ...defaultTag, html: arr[1] }));
        tempTag.remove();
        placeholder.parentElement.remove();
      } else {
        placeholder.parentElement.insertAdjacentElement("afterend", spaceTag);
        placeholder.remove();
      }
      break;
    case "Enter":
    case "Digit1": // for texting
      let line = document.createElement("span");
      line.innerHTML = '<span><p class="placeholder" id="placeholder"></p></span>';
      placeholder.parentElement.parentElement.insertAdjacentElement("afterend", line);
      placeholder.remove();
      break;
    case "Backspace":
      if (editor?.firstElementChild?.firstElementChild?.firstElementChild?.id === "placeholder") {
        break;
      }
      if (placeholder.previousElementSibling) {
        placeholder.previousElementSibling.remove();
      } else {
        const nph = createTag({ ...defaultTag, id: "placeholder", className: "placeholder" });
        if (placeholder.parentElement.previousElementSibling) {
          placeholder.parentElement.previousElementSibling.appendChild(nph);
        } else {
          if (placeholder.parentElement.parentElement.previousElementSibling?.lastChild) {
            placeholder.parentElement.parentElement.previousElementSibling.lastChild.appendChild(
              nph
            );
          }
          placeholder.parentElement.parentElement.remove();
        }
        placeholder.parentElement.remove();
      }
      break;
    default:
      break;
  }
  return;
}

function createTag(obj) {
  const { type, html, id, className, styles } = obj;
  let tag = document.createElement(type);
  if (className) {
    tag.className = className;
  }
  if (html) {
    tag.innerHTML = html;
  }
  if (id) {
    tag.id = id;
  }
  if (styles?.length) {
    styles.forEach((el) => {
      tag.style[el.type] = el.val;
    });
  }
  return tag;
}

function movePlaceholder(key) {
  const placeholder = document.getElementById("placeholder");
  let newPlaceHolder = document.createElement("p");
  newPlaceHolder.id = "placeholder";
  newPlaceHolder.className = "placeholder";
  const isRight = key === "ArrowRight";
  const sibling = isRight ? "nextElementSibling" : "previousElementSibling";
  const child = isRight ? "firstChild" : "lastChild";
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
        const editor = document.getElementById("editor");
        const initChild = isRight ? "lastChild" : "firstChild";
        target = editor[initChild][initChild][initChild];
      }
    }
  }
  target.insertAdjacentElement(isRight ? "afterend" : "beforebegin", newPlaceHolder);
  placeholder.remove();
}

export default handleKeys;
