import { useState } from "react";

function Intro() {
  const [page, setPage] = useState(0);

  return (
    <div className="content">
      <h2 style={{ textAlign: "center" }}>Hello and welcome to my portfolio.</h2>
      <br />
      <div>
        <p>
          Interact with the characters in order to progress through the site. After you have
          collected all 26 pop-up windows. You'll win and shall receive a reward.
        </p>
        <p>Refresh the page to reload. If you have any questions, ask the flower.</p>
        <p>{page}</p>
      </div>
      <div className="windows-btn">
        <button onClick={() => setPage(page - 1)}>prev</button>
      </div>

      <button onClick={() => setPage(page + 1)}>next</button>
    </div>
  );
}

export default Intro;
