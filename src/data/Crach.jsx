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
                Cannot read length of null (reading 'yore_dick') TypeError: Cannot read
                properties of null (reading 'yore_dick') at the_club
                (http://localhost:3000/your/mon.js:11359:76) at
                http://localhost:3000/your/mon.js:10362:67
              </div>
            </div>
          </div>
          <p>Do you want to crach the site?</p>
          <div>
            <button>Yes</button>
            <button>No</button>
          </div>
        </div>
      ) : (
        <div className="content">
          <p>Do you want to crach the site?</p>
          <div>
            <button onClick={() => setCrach(true)}>Yes</button>
            <button>No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Crach;
