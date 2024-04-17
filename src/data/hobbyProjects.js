const hobbyProjects = {
  title: "Hobby Projects",
  html: (
    <div className="content">
      <fieldset>
        <legend>TinyHans</legend>
        <ul>
          <li>
            <strong>Description:&nbsp;</strong>TinyHans is a what-you-see-is-what-you-get(WYSIWYG)
            editor. A text editor that displays how the text will look in real-time.
          </li>
          <li>
            <strong>Functionality:&nbsp;</strong>Typing letters A-Z and numbers 0-9, remove
            characters, new line, move placeholder by arrow/mouse, make text bold/italic and change
            alignment.
          </li>
          <li>Contrary to the most popular option, TinyMCE, I don't use [contentEditable].</li>
          <li>
            <strong>Tools:&nbsp;</strong>Javascript & React. No external librarys.
          </li>
        </ul>
      </fieldset>

      <br />
      <fieldset>
        <legend>Vikimon</legend>
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
            <strong>Tools:&nbsp;</strong>Javascript, React & Axios
          </li>
        </ul>
        <a
          style={{ color: "#0b1350", margin: 4, fontSize: "1em" }}
          href="https://github.com/ViktorHek/vikimon">
          Link
        </a>
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
            <strong>Collection:&nbsp;</strong>Containers, dropdowns, buttons, slime-animation, icons
            and a font.
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
          <strong>Tools:&nbsp;</strong>Javascript & Node.js. no external librarys.
        </ul>
      </fieldset>
    </div>
  ),
};

export default hobbyProjects;
