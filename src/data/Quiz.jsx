import { useEffect, useState } from "react";

function Quiz() {
  const [win, setWin] = useState(false);
  useEffect(() => {
    if (win) handleWin();
  }, [win]);
  function handleSubmit() {
    const asn1 = document.getElementById("CustomerFirst").checked;
    const asn2 = document.getElementById("digimon").checked;
    const asn31 = document.getElementById("viktor1").checked;
    const asn32 = document.getElementById("viktor2").checked;
    const asn33 = document.getElementById("viktor3").checked;
    const asn4 = document.getElementById("graymaybe").checked;
    console.log({ asn1 });
    const asn3 = asn31 || asn32 || asn33;
    if (asn1 && asn2 && asn3 && asn4) {
      setWin(true);
    } else {
      getError(asn1, "fieldset1");
      getError(asn2, "fieldset2");
      getError(asn3, "fieldset3");
      getError(asn4, "fieldset4");
    }
  }
  function handleWin() {
    sessionStorage.setItem("quiz", true);
  }

  function getError(ans, id) {
    console.log(ans, id);
    let el = document.getElementById(id);
    if (ans) {
      el.style.border = "none";
    } else {
      el.style.border = "2px solid red";
    }
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
        <div className="quiz">
          <h2>This is a quiz on everything you learned from my portfolio.</h2>
          <fieldset id="fieldset1" name="fieldset1">
            <legend>At what company did I get my first programmin job?</legend>
            <div>
              <input name="fieldset1" type="radio" id="Talentech" value="Talentech" />
              <label for="Talentech">Talentech</label>
            </div>
            <div>
              <input name="fieldset1" type="radio" id="CustomerFirst" value="CustomerFirst" />
              <label for="CustomerFirst">Customer First</label>
            </div>
            <div>
              <input name="fieldset1" type="radio" id="Customertech" value="Customertech" />
              <label for="Customertech">Customertech</label>
            </div>
          </fieldset>
          <fieldset id="fieldset2" name="fieldset2">
            <legend>Witch one is not one of my hobby projects?</legend>
            <div>
              <input type="radio" id="nocap" name="fieldset2" value="nocap" />
              <label for="nocap">AI-NoCap: self made AI bot (that isn't an AI bot)</label>
            </div>
            <div>
              <input type="radio" id="TinyHans" name="fieldset2" value="TinyHans" />
              <label for="TinyHans">TinyHans: WYSIWUG-editor</label>
            </div>
            <div>
              <input type="radio" id="digimon" name="fieldset2" value="digimon" />
              <label for="digimon">Digimon 2: remake of digimon 1, but bigger</label>
            </div>
          </fieldset>
          <fieldset id="fieldset3" name="fieldset3">
            <legend>
              Who made all the artwork, the background, the duddles and animations for the whole
              page?
            </legend>
            <div>
              <input type="radio" id="viktor1" name="fieldset3" value="viktor1" />
              <label for="viktor1">Viktor Karlsson</label>
            </div>
            <div>
              <input type="radio" id="viktor2" name="fieldset3" value="viktor2" />
              <label for="viktor2">Viktor Karlsson</label>
            </div>
            <div>
              <input type="radio" id="viktor3" name="fieldset3" value="viktor3" />
              <label for="viktor3">Viktor Karlsson</label>
            </div>
          </fieldset>
          <fieldset id="fieldset4" name="fieldset4">
            <legend>Why did the dwemer disappeared?</legend>
            <div>
              <input type="radio" id="graymaybe" name="fieldset4" value="graymaybe" />
              <label for="graymaybe">They traveled to 'the gray maybe'</label>
            </div>
            <div>
              <input type="radio" id="chim" name="fieldset4" value="chim" />
              <label for="chim">
                They reached chim and realised they are just a dream in the god-head.
              </label>
            </div>
            <div>
              <input type="radio" id="numidium" name="fieldset4" value="numidium" />
              <label for="numidium">They became the skin of Numidium the brass god</label>
            </div>
          </fieldset>
          <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default Quiz;
