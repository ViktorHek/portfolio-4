import { useState } from "react";

function Crach() {
  const [crach, setCrach] = useState(false);

  return (
    <>
      {crach ? (
        <div className="content">
          <div className="error-container">
            <span style={{ color: "#e83b46" }}>Uncaught runtime errors:</span>
            <div>
              <span>ERROR</span>
              <div>
                Cannot read length of null (reading 'yore_dick') TypeError: Cannot read properties
                of null (reading 'yore_dick') at the_club
                (http://localhost:3000/your/mon.js:11359:76) at
                http://localhost:3000/your/mon.js:10362:67
              </div>
              <div>
                Cannot read length of null (reading 'yore_dick') TypeError: Cannot read properties
                of null (reading 'yore_dick') at the_club
                (http://localhost:3000/your/mon.js:11359:76) at
                http://localhost:3000/your/mon.js:10362:67
              </div>
              <div>
                Cannot read length of null (reading 'yore_dick') TypeError: Cannot read properties
                of null (reading 'yore_dick') at the_club
                (http://localhost:3000/your/mon.js:11359:76) at
                http://localhost:3000/your/mon.js:10362:67
              </div>
              <div>
                Cannot read length of null (reading 'yore_dick') TypeError: Cannot read properties
                of null (reading 'yore_dick') at the_club
                (http://localhost:3000/your/mon.js:11359:76) at
                http://localhost:3000/your/mon.js:10362:67
              </div>
              <div>
                Cannot read length of null (reading 'yore_dick') TypeError: Cannot read properties
                of null (reading 'yore_dick') at the_club
                (http://localhost:3000/your/mon.js:11359:76) at
                http://localhost:3000/your/mon.js:10362:67
              </div>
            </div>
          </div>
          <p>Do you want to crach the site?</p>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>
            <div className="windows-btn" style={{ height: 20, width: 50 }}>
              <button style={{ height: "100%", width: "100%" }}>No</button>
            </div>
            <div className="windows-btn" style={{ height: 20, width: 50 }}>
              <button onClick={() => setCrach(true)} style={{ height: "100%", width: "100%" }}>
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <p>Do you want to crach the site?</p>
          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>
            <div className="windows-btn" style={{ height: 20, width: 50 }}>
              <button style={{ height: "100%", width: "100%" }}>No</button>
            </div>
            <div className="windows-btn" style={{ height: 20, width: 50 }}>
              <button onClick={() => setCrach(true)} style={{ height: "100%", width: "100%" }}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Crach;
