const cv = {
  title: "Resumé",
  html: (
    <div
    className="content"
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div className="windows-btn">
      <a href="/#" download="images/Viktor_Karlsson_CV.pdf">
        Download
      </a>
    </div>

    <img
      src="images/Viktor_Karlsson_CV.jpg"
      alt="CV"
      style={{ maxWidth: "95%", maxHeight: "95%" }}
    />
  </div>
  )
}

export default cv;
