import "../styles/keyboard.css";

function Keyboard(props) {
  return (
    <div className="container">
      <div className="row">
        {"qwertyuiopå".split("").map((el) => {
          return <div>{el}</div>;
        })}
      </div>
      <div className="row">
        {"asdfghjklöä".split("").map((el) => {
          return <div>{el}</div>;
        })}
      </div>
      <div className="row">
        {"zxcvbnm".split("").map((el) => {
          return <div>{el}</div>;
        })}
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default Keyboard;
