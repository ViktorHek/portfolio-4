const pokemonCalc = {
  title: "Damage calculation in Pokemon Red",
  html: (
    <div
      style={{
        padding: 20,
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "2px solid black",
            borderRight: "2px solid black",
            borderRadius: "15px",
            padding: "0px 15px",
          }}>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <div
                style={{
                  display: "flex",
                  borderLeft: "2px solid black",
                  borderRight: "2px solid black",
                  borderRadius: "15px",
                  padding: "0px 15px",
                }}>
                <div>
                  <div style={{ whiteSpace: "nowrap" }}>2 * yore_level * isCriticalHit ? 2 : 1</div>
                  <div
                    style={{
                      borderTop: "1px solid black",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    5
                  </div>
                </div>
                <span
                  style={{
                    whiteSpace: "nowrap",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  &nbsp;+ 2
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ whiteSpace: "nowrap" }}>&nbsp;* Power *&nbsp;</span>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}>
                  <div>attack_stat</div>
                  <div style={{ borderTop: "1px solid black" }}>defence_stat</div>
                </div>
              </div>
            </div>
            <span
              style={{
                borderTop: "1px solid black",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1px",
              }}>
              50
            </span>
          </div>
          <p
            style={{
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            &nbsp;+ 2
          </p>
        </div>
        <p style={{ whiteSpace: "nowrap" }}>&nbsp; * STAB * Type1 * Type2 * random.</p>
      </div>
      <br />
      <p>rounded down.</p>
    </div>
    // <div className="content">
    //   <p style={{textAlign:"left"}}>
    //     same_tpe_attack_bonus * attack_effectivnes * ( random_number_between_217_255 / 255 ) * ( ( (
    //     ( 2 * your_level * critical_hit_modifyer ) / 5 + 2 ) * attack_power * ( your_attack_stat /
    //     opponent_defence_stat ) ) / 50 + 2 )
    //   </p>
    //   <p>rounded down</p>
    // </div>
  ),
};

export default pokemonCalc;
