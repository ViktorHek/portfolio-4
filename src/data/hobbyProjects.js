const hobbyProjects = {
  title: "Hobby Projects",
  html: (
    <div className="content">
      <fieldset>
        <legend>TinyHans</legend>
        <ul>
          <li>
            <strong>Description:&nbsp;</strong>TinyHans is a what-you-see-is-what-you-get(WYSIWYG)
            editor. A text editor that displays how the text will look like in real-time.
          </li>
          <li>
            <strong>Functionality:&nbsp;</strong>Typing letters A-Z and numbers 0-9, remove
            characters, new line, move placeholder by arrow/mouse, make text bold/italic and change
            alignment.
          </li>
          {/* <li>TinyHans uses key press event and creates a letter, word or new line. The most common WYSIWYG-editor uses contentEditable. </li> */}
          <li>
            <strong>Tools:&nbsp;</strong>
            <ul>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </li>
        </ul>
      </fieldset>

      <br />
      <fieldset>
        <legend>Vikimon</legend>{" "}
        <a
          style={{ color: "#0b1350", margin: 4, fontSize: "1em" }}
          href="https://github.com/ViktorHek/vikimon">
          Link
        </a>
        <ul>
          <li>
            <strong>Description:&nbsp;</strong>A recreation of the pokemon red game from 1996. The
            plan is to imitate the original with added modern features. This game is written in
            react (javascript) and uses no external game engine or database.
          </li>
          <li>
            <strong>Functionality:&nbsp;</strong>Player can move around in a town and go into
            buildings. When stepping on grass or water, there is a chance of encountering a pokemon.
            You can defet it or run. The players pokemon party is stored in local storage and can be
            changed. Description on how is in the Readme.
          </li>
          <li>
            <strong>Tools:&nbsp;</strong>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Axios</li>
            </ul>
          </li>
        </ul>
      </fieldset>

      <br />
      <fieldset>
        <legend>Component Library</legend>
        <ul>
          <li>
            <strong>Description:&nbsp;</strong>A collection of reusable components that I have
            ownership of.
          </li>
          <li>
            <strong>Collection:&nbsp;</strong>Containers, dropdowns, buttons, icons and a font.
          </li>
        </ul>
      </fieldset>
      <br />
      <fieldset>
        <legend>AI-NoCap</legend>
        <ul>
          <li>
            You get two options: Door #1 & Door #2. The AI robot will guess which door you pick. If
            the AI is wrong, you win.
          </li>
          <li>
            <strong>Functionality:&nbsp;</strong>Both doos have a counter. The AI selects the one
            with the lowest count. This is the reason for the name "No Cap".
          </li>
          <strong>Tools:&nbsp;</strong>
          <ul>
            <li>Javascript</li>
            <li>Node.js</li>
          </ul>
        </ul>
      </fieldset>
    </div>
  ),
};

export default hobbyProjects;
