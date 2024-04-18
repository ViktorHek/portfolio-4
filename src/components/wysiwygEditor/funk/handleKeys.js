// import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
// import appendTag from "./appendTag";

// const specialKeys = ["space", "backspace", "enter"];
// const arrowKeys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];

function handleKeys(event, styles) {
  const dir = event.code.toLowerCase();
  const placeholder = document.getElementById("placeholder");
  const editor = document.getElementById("editor");
  let newPlaceHolder = document.createElement("p");
  newPlaceHolder.id = "placeholder";
  newPlaceHolder.class = "placeholder";
  newPlaceHolder.className = "placeholder";
  newPlaceHolder.name = "placeholder";

  switch (dir) {
    case `key${dir.slice(-1)}`:
      if (placeholder.parentElement.name === "space") {
        let tag = document.createElement("span");
        placeholder.parentElement.insertAdjacentElement("afterend", tag);
        placeholder.remove();
        let letterTag = document.createElement("p");
        styles.forEach((el) => {
          letterTag.style[el.type] = el.val;
        });
        letterTag.innerHTML = dir.replace("key", "");
        tag.appendChild(letterTag);
        tag.appendChild(newPlaceHolder);
      } else {
        let tag = document.createElement("p");
        tag.innerText = dir.replace("key", "");
        styles.forEach((el) => {
          tag.style[el.type] = el.val;
        });
        placeholder.insertAdjacentElement("beforebegin", tag);
      }
      break;
    case "space":
      if (placeholder.nextElementSibling) {
        let tempTag = document.createElement("span");
        placeholder.parentElement.insertAdjacentElement("afterend", tempTag);
        let firstWord = document.createElement("span");
        let secondWord = document.createElement("span");
        let puchFirst = true;

        Array.prototype.forEach.call(placeholder.parentElement.children, function (el) {
          if (el.id === "placeholder") {
            puchFirst = false;
          } else {
            if (puchFirst) {
              let p = document.createElement("p");
              p.innerHTML = el.innerHTML;
              firstWord.appendChild(p);
            } else {
              let p = document.createElement("p");
              p.innerHTML = el.innerHTML;
              secondWord.appendChild(p);
            }
          }
        });
        tempTag.insertAdjacentElement("afterend", firstWord);
        let tag = document.createElement("span");
        tag.name = "space";
        tag.innerHTML =
          '<p>&nbsp;</p><p className="placeholder" class="placeholder" id="placeholder"></p>';
        firstWord.insertAdjacentElement("afterend", tag);
        tag.insertAdjacentElement("afterend", secondWord);
        tempTag.remove();
        placeholder.parentElement.remove();
      } else {
        let tag = document.createElement("span");
        tag.name = "space";
        tag.innerHTML =
          '<p>&nbsp;</p><p className="placeholder" class="placeholder" id="placeholder"></p>';
        placeholder.parentElement.insertAdjacentElement("afterend", tag);
        placeholder.remove();
      }
      break;
    case "enter":
      let line = document.createElement("span");
      line.innerHTML = '<span><p></p><p class="placeholder" id="placeholder"></p></span>';
      placeholder.parentElement.parentElement.insertAdjacentElement("afterend", line);
      placeholder.remove();
      break;
    case "backspace":
      if (
        editor.children.length === 1 &&
        editor.firstElementChild.children.length === 1 &&
        editor.firstElementChild.firstElementChild.children.length === 1
      ) {
        break;
      }
      if (editor.firstChild.firstChild.firstChild.nextElementSibling) {
        if (editor.firstChild.firstChild.firstChild.nextElementSibling.id === "placeholder") {
          placeholder.previousElementSibling.remove();
          break;
        }
      }
      if (placeholder.parentElement.children.length < 3) {
        if (placeholder.parentElement.parentElement.children.length < 2) {
          if (placeholder.parentElement.children.length < 3) {
            // new code start
            //   if (placeholder.previousElementSibling) {
            //     placeholder.previousElementSibling.remove();
            //   }
            // } else {
            // new code end
            placeholder.parentElement.parentElement.previousElementSibling.lastChild.appendChild(
              newPlaceHolder
            );
            placeholder.parentElement.parentElement.remove();
            placeholder.parentElement.remove();
            placeholder.remove();
          }
        } else {
          placeholder.parentElement.previousElementSibling.appendChild(newPlaceHolder);
          placeholder.parentElement.remove();
          placeholder.remove();
        }
      } else {
        if (placeholder.previousElementSibling) {
          placeholder.previousElementSibling.remove();
        }
      }
      break;
    default:
      break;
  }
  return;
}

export default handleKeys;
