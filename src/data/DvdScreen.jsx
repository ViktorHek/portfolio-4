import { useEffect } from "react";

function DvdScreen() {
  const conatinerHeight = 320;
  const conatinerWidth = 300;
  const boxHeight = 40;
  const boxWidth = 100;
  const colors = ["#749e2c", "#1b5489", "#891b73", "#001301FF"];

  let interval;
  let x = 1;
  let y = 1;
  let down = true;
  let right = true;
  let colorIndex = 0;

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function init() {
    const container = document.getElementById("dvd_container");
    container.style.height = `${conatinerHeight}px`;
    container.style.width = `${conatinerWidth}px`;
    const box = document.getElementById("dvd_box");
    box.style.height = `${boxHeight}px`;
    box.style.width = `${boxWidth}px`;
    if (!interval) {
      interval = setInterval(changePos, 10);
    }
  }

  function changePos() {
    const box = document.getElementById("dvd_box");
    if (!box) {
      clearInterval(interval);
      return;
    }
    if (x === conatinerHeight - boxHeight || x === 0) {
      down = !down;
      changeColor();
    }
    if (y === conatinerWidth - boxWidth || y === 0) {
      right = !right;
      changeColor();
    }
    x = x + (down ? +1 : -1);
    y = y + (right ? +1 : -1);
    box.style.top = `${x}px`;
    box.style.left = `${y}px`;
  }

  function changeColor() {
    // const box = document.getElementById("dvd_box");
    for (let index = 0; index < 6; index++) {
      document.getElementById(`svg${index}`).style.fill = colors[colorIndex];
    }
    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
  }

  return (
    <div style={{ backgroundColor: "#ccbdf4", position: "relative" }} id="dvd_container">
      <span
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
        id="dvd_box">
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
          <g id="dd">
            <ellipse id="svg0" cx="51.1507" cy="50" rx="40.8493" ry="42" fill="#001301FF"></ellipse>
            <rect id="svg1" x="8" y="8" width="56" height="84" rx="11.5068" fill="#001301FF"></rect>
          </g>
        </svg>

        <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
          <g id="vv">
            <rect
              id="svg2"
              x="77.9454"
              y="11.0077"
              width="20.8732"
              height="78.9321"
              rx="10.4366"
              transform="rotate(32 77.9454 11.0077)"
              fill="#001301FF"></rect>
            <rect
              id="svg3"
              x="5"
              y="22.0611"
              width="20.8732"
              height="78.9321"
              rx="10.4366"
              transform="rotate(-32 5 22.0611)"
              fill="#001301FF"></rect>
          </g>
        </svg>

        <svg width="30" height="30" viewBox="0 0 100 100" fill="none">
          <g id="dd">
            <ellipse id="svg4" cx="51.1507" cy="50" rx="40.8493" ry="42" fill="#001301FF"></ellipse>
            <rect id="svg5" x="8" y="8" width="56" height="84" rx="11.5068" fill="#001301FF"></rect>
          </g>
        </svg>
      </span>
    </div>
  );
}

export default DvdScreen;
