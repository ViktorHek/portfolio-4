import { useState } from "react";
import Checkbox from "../components/Checkbox";

function Quiz(props) {
  const [win, setWin] = useState(false);
  const [form, setForm] = useState({
    q1: [
      { text: "Talentech", checked: false },
      { text: "Customer First", checked: false },
      { text: "Customertech", checked: false },
    ],
    q2: [
      { text: "AI-NoCap: self made AI bot (that isn't an AI bot)", checked: false },
      { text: "TinyHans: WYSIWUG-editor", checked: false },
      { text: "Digimon 2: remake of digimon 1, but bigger", checked: false },
    ],
    q3: [
      { text: "Viktor Karlsson", checked: false },
      { text: "Viktor Karlsson", checked: false },
      { text: "Viktor Karlsson", checked: false },
    ],
    q4: [
      { text: "They traveled to 'the gray maybe'", checked: false },
      { text: "They became the skin of Numidium the brass god", checked: false },
      {
        text: "They reached chim and realised they are just a dream in the god-head.",
        checked: false,
      },
    ],
  });
  const [up, setUp] = useState(false);

  function handleSubmit() {
    const { q1, q2, q3, q4 } = form;
    const ans1 = q1[1].checked;
    const ans2 = q2[2].checked;
    const ans3 = q3[0].checked || q3[1].checked || q3[2].checked;
    const ans4 = q4[0].checked;

    if (ans1 && ans2 && ans3 && ans4) {
      setWin(true);
      sessionStorage.setItem("quiz", true);
      return props.handleWin();
    } else {
      getError(ans1, "fieldset1");
      getError(ans2, "fieldset2");
      getError(ans3, "fieldset3");
      getError(ans4, "fieldset4");
    }
  }

  function getError(ans, id) {
    let el = document.getElementById(id);
    if (ans) {
      el.style.borderColor = "green";
    } else {
      el.style.borderColor = "red";
    }
  }

  function handleClick1(question, i) {
    let obj = form;
    obj[question].forEach((el, index) => {
      if (index === i) {
        el.checked = true;
      } else {
        el.checked = false;
      }
    });
    console.log(obj);
    setForm(obj);
    setUp(!up);
  }

  return (
    <>
      {win ? (
        <div className="content">
          <h1 style={{ textAlign: "center" }}>Winner!</h1>
          <p>
            Congratulations! You will gain access to the Toolbar. This will allow you to download my
            resume, personal letter and doodles
          </p>
        </div>
      ) : (
        <div className="content">
          <h2>This is a quiz on everything you learned from my portfolio.</h2>
          <br />
          <fieldset id="fieldset1" name="fieldset1">
            <legend className="title-s">Where did I get my first programming job?</legend>
            {form.q1.map((el, index) => {
              return (
                <Checkbox
                  check={el.checked}
                  text={el.text}
                  handleClick={handleClick1}
                  question={"q1"}
                  index={index}
                />
              );
            })}
          </fieldset>
          <fieldset id="fieldset2" name="fieldset2">
            <legend className="title-s">Witch one is not one of my hobby projects?</legend>
            {form.q2.map((el, index) => {
              return (
                <Checkbox
                  check={el.checked}
                  text={el.text}
                  handleClick={handleClick1}
                  question={"q2"}
                  index={index}
                />
              );
            })}
          </fieldset>
          <fieldset id="fieldset3" name="fieldset3">
            <legend className="title-s">
              Who made all the artwork, styling and animations for the page?
            </legend>
            {form.q3.map((el, index) => {
              return (
                <Checkbox
                  check={el.checked}
                  text={el.text}
                  handleClick={handleClick1}
                  question={"q3"}
                  index={index}
                />
              );
            })}
          </fieldset>
          <fieldset id="fieldset4" name="fieldset4">
            <legend className="title-s">Why did the dwemer disappeared?</legend>
            {form.q4.map((el, index) => {
              return (
                <Checkbox
                  check={el.checked}
                  text={el.text}
                  handleClick={handleClick1}
                  question={"q4"}
                  index={index}
                />
              );
            })}
          </fieldset>
          <div className="windows-btn" style={{ height: 20, width: 50 }}>
            <button onClick={handleSubmit} style={{ height: "100%", width: "100%" }}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
