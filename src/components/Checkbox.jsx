import { useState } from "react";
import Penis from "../animations/Penis";

function Checkbox(props) {
  const { check, handleClick, text, question, index } = props;
  // const [check, setCheck] = useState(false);
console.log('gg: ', index)
  // function handleClick() {
  //   setCheck(!check);
  // }

  return (
    <div style={{ display: "flex", alignItems: "center", margin: '5px 0px' }}>
      <div
        style={
          check
            ? {
                width: "10px",
                height: "10px",
                border: "1px solid #44db83",
                borderRadius: "50%",
                marginRight: "4px",
                transition: "0.5s",
              }
            : {
                width: "10px",
                height: "10px",
                border: "1px solid #0b1350",
                borderRadius: "50%",
                marginRight: "4px",
                transition: "0.5s",
              }
        }
        className="center"
        onClick={() => handleClick(question, index)}>
        <div
          style={
            check
              ? { width: "8px", height: "8px", opacity: 1, transition: "0.5s" }
              : { width: "8px", height: "8px", opacity: 0, transition: "0.5s" }
          }
          className="d-flex">
          {check ? <Penis /> : null}
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default Checkbox;
