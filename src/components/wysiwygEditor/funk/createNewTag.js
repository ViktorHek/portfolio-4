function createNewTag(idCounter, propertys) {
  let tag = document.createElement("p");
  tag.id = idCounter;
  propertys.forEach(element => {
    switch (element) {
      case "italic":
        tag.style.fontStyle = "italic";
        break;
      case "bold":
        tag.style.fontWeight = "bold";
        break;
      default:
        break;
    }    
  });
  return tag
}

export default createNewTag;
