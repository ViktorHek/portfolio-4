import { useEffect, useState } from "react";

function Crach() {
  const [crach, setCrach] = useState(false);

  return (
    <>
      {crach ? (
        <div className="content">
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgb(0,0,0,85%)",
            }}></div>
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
