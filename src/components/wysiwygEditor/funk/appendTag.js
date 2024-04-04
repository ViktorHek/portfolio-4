function appendTag(obj) {
  const { target, id, props, text, type } = obj;
  const editor = document.getElementById("editor");

  let tag = document.createElement(type);
  props.styles.forEach((el) => {
    tag.style[el.type] = el.val;
  });
  tag.id = id;

  if (text === "&nbsp;") {
    let space = document.createElement("p");
    space.innerHTML = "&nbsp;";
    space.id = id+'x'
    tag.name = "space";
    // console.log({tag})
    tag.appendChild(space);
  } else {
    tag.innerHTML = text;
  }

  // if(text === 'speci'){
  //   let firstTagArr = []
  //   let secondTagArr = []
  //   let pushFirstArr = true
  //   let idx = 'x'
  //   Array.prototype.forEach(focusTag.parentElement.children, function(el) {
  //     if(pushFirstArr) {
  //       firstTagArr.push(el.innerHTML)
  //     } else {
  //       secondTagArr.push(el.innerHTML)
  //     }
  //     if(el.className === 'focus-letter'){
  //       pushFirstArr = false
  //     }
  //   })
  //   if(focusTag.parentElement.previousElementSibling) {
  //     tags.push({
  //       ...span,
  //       target: "word",
  //       id: `w-${idCounter}`,
  //     });
  //     firstTagArr.forEach((el) => {
  //       tags.push({
  //         ...p,
  //         id: 'bajs',
  //         text: dir.replace("key", ""),
  //         props: { styles: styles },
  //       });
  
  //     })

  //   }

  // }

  switch (target) {
    case "char":
      editor.lastChild.lastChild.appendChild(tag);
      break;
    case "word":
      editor.lastChild.appendChild(tag);
      break;
    case "line":
      editor.appendChild(tag);
      break;
    default:
      let focusTag = document.getElementById(target);
      focusTag.insertAdjacentElement("afterend", tag);
      break;
  }
}

export default appendTag;
