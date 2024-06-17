const defaultTag = {
  type: 'span',
  html: '',
  id: '',
  className: '',
  styles: []
}

function handleKeys(event, styles) {
  const dir = event.code.toLowerCase();
  const placeholder = document.getElementById("placeholder");
  const editor = document.getElementById("editor");
  if (!placeholder || !editor || !placeholder.parentElement || !placeholder.parentElement.parentElement) return
  switch (dir) {
    case `key${dir.slice(-1)}`:
      const letterTag = createTag({ ...defaultTag, type: 'p', html: dir.replace("key", ""), styles: styles })
      if (placeholder.parentElement?.className === "space") {
        const tag = createTag({ ...defaultTag, html: letterTag.outerHTML + '<p className="placeholder" class="placeholder" id="placeholder"></p>' })
        placeholder.parentElement.insertAdjacentElement("afterend", tag);
        placeholder.remove();
      } else {
        placeholder.insertAdjacentElement("beforebegin", letterTag);
      }
      break;
    case "space":
      const spaceTag = createTag({ ...defaultTag, html: '<p>&nbsp;</p><p class="placeholder" id="placeholder"></p>', className: 'space' })
      if (placeholder?.nextElementSibling) {
        const tempTag = document.createElement("span");
        placeholder.parentElement.insertAdjacentElement("afterend", tempTag);
        let arr = ['', '']
        const i = Array.from(placeholder.parentElement.children).indexOf(placeholder);
        placeholder.remove()
        Array.prototype.forEach.call(placeholder.parentElement.children, function (el, index) {
          arr[index < i ? 0 : 1] += el.outerHTML
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
    case "enter":
    case "digit1": // for texting
      let line = document.createElement("span");
      line.innerHTML = '<span><p class="placeholder" id="placeholder"></p></span>';
      placeholder.parentElement.parentElement.insertAdjacentElement("afterend", line);
      placeholder.remove();
      break;
    case "backspace":
      if (
        editor?.firstElementChild?.firstElementChild?.firstElementChild?.id === 'placeholder'
      ) {
        break;
      }
      if (placeholder.previousElementSibling) {
        placeholder.previousElementSibling.remove()
      } else {
        const nph = createTag({ ...defaultTag, id: 'placeholder', className: 'placeholder' })
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
        placeholder.parentElement.remove()
      }
      break;
    default:
      break;
  }
  return;
}

function createTag(obj) {
  const { type, html, id, className, styles } = obj
  let tag = document.createElement(type);
  if (className) {
    tag.className = className;
  }
  if (html) {
    tag.innerHTML = html
  }
  if (id) {
    tag.id = id
  }
  if (styles?.length) {
    styles.forEach((el) => {
      tag.style[el.type] = el.val;
    });
  }
  return tag
}

export default handleKeys;
