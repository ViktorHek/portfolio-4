import "./index.css";

function Header() {
  const drips = [
    { id: 1, class: "drip-xs", color: "fill: #0C134F;" },
    { id: 3, class: "drip-medium", color: "fill: #0C134F;" },
    { id: 2, class: "drip-small", color: "fill: #0C134F;" },
    { id: 4, class: "drip-big", color: "fill: #0C134F;" },
  ];
  const drops = [
    { id: 1, class: "drop-xs", color: "fill: #0C134F;" },
    { id: 3, class: "drop-medium", color: "fill: #0C134F;" },
    { id: 2, class: "drop-small", color: "fill: #0C134F;" },
    { id: 4, class: "drop-big", color: "fill: #0C134F;" },
  ];

  return (
    <div
      style={{
        zIndex: 1,
        pointerEvents: "none",
        position: "relative",
        top: 0,
        left: 0,
        overflow: "visible",
      }}>
      {/* <div style="z-index: 999; position: sticky; top: 0; left: 0; overflow: visible"> */}
      <div style={{ position: "relative" }}>
        {/* <img src="images/pexels-felix-mittermeier-956999.jpg" alt="" /> */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100% 100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect id="base_rect" width="1440" height="100" fill="#0C134F" />
        </svg>
        <div class="main_drip_container">
          {drips.map((el) => {
            return (
              <svg
                fill="#0C134F"
                key={el.id}
                className={el.class}
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none">
                <path d="M296.081 87.9687C312.696 22.1049 367.616 1.87967 393 0H0.37939C58.1352 0 89.0569 58.6458 97.2983 87.9687C109.496 159.02 146.549 300.898 197.184 299.996C260.478 298.868 275.313 170.298 296.081 87.9687Z" />
              </svg>
            );
          })}
        </div>

        <div class="main_drop_container">
          {drops.map((drop) => {
            return (

              <div
                className={drop.class}
                key={drop.id}>
                <svg
                  fill="#0C134F"
                  id={drop.id}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none">
                  <circle cx="50" cy="71" r="25" />
                  <path d="M50 3L74.2487 64.5H25.7513L50 3Z" />
                </svg>
              </div>
            );
          })}
        </div>
        <div class="main_drop_container">
          {drops.map((drop) => {
            return (

              <div
                className={`${drop.class}2`}
                key={drop.id}>
                <svg
                  fill="#0C134F"
                  id={drop.id}
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none">
                  <circle cx="50" cy="71" r="25" />
                  <path d="M50 3L74.2487 64.5H25.7513L50 3Z" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
