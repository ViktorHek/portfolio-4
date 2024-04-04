import '../styles/header.css'

function Header({handleClickHeader}) {

  function handleClick(type){
    handleClickHeader(type)
  }
 
  return (
    <div className="header-container">
      <div className="header-min-btn btn" onClick={() => handleClick('min')}>
        <span></span>
      </div>
      <span className="header-text">TinyHans</span>
      <div className="header-close-btn btn" onClick={() => handleClick('close')}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
