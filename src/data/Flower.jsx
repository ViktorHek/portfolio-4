function Flower({ fasthandle }) {
  return (
    <div className="content">
      <p>Hello! My name is flower and I work here as a refference manual. </p>
      <p>
        If you don't want to go through the hustle of finding all 25 pop-up windows, you'll find all
        of them below. But know that if you open a pop-up window through me, you'll still have to
        find the doodle associated with that window to win.
      </p>
      <br />
      <fieldset>
        <legend>Relevant Info</legend>
        <ul>
          <li>
            <span onClick={() => fasthandle("workExperience")}>Work experience</span>
          </li>
          <li>
            <span onClick={() => fasthandle("education")}>Education</span>
          </li>
          <li>
            <span onClick={() => fasthandle("cv")}>Resumé</span>
          </li>
          <li>
            <span onClick={() => fasthandle("pb")}>Personal Letter</span>
          </li>
          <li>
            <span onClick={() => fasthandle("contact")}>Contact Information</span>
          </li>
          <li>
            <span onClick={() => fasthandle("skills")}>Competencies</span>
          </li>
          <li>
            <span onClick={() => fasthandle("personality")}>Personality</span>
          </li>
          <li>
            <span onClick={() => fasthandle("journey")}>Journey</span>
          </li>
          <li>
            <span onClick={() => fasthandle("reference")}>Reference</span>
          </li>
          <li>
            <span onClick={() => fasthandle("links")}>Links</span>
          </li>
        </ul>
      </fieldset>
      <br />
      <fieldset>
        <legend>Projects</legend>

        <ul>
          <li>
            <span onClick={() => fasthandle("hobbyProjects")}>Hobby Projects</span>
          </li>
          <li>
            <span onClick={() => fasthandle("editorDude")}>WYSIWYG-Editor</span>
          </li>
          <li>
            <span onClick={() => fasthandle("hussle")}>This Webpage</span>
          </li>
          <li>
            <span onClick={() => fasthandle("dvdScreen")}>DVD screen</span>
          </li>
          <li>
            <span onClick={() => fasthandle("font")}>My Font</span>
          </li>
          <li>
            <span onClick={() => fasthandle("doodleList")}>Art Gallery</span>
          </li>
          <li>
            <span onClick={() => fasthandle("bigBg")}>Physical Art</span>
          </li>
          <li>
            <span onClick={() => fasthandle("orangeDuddle")}>Art, but bigger</span>
          </li>
        </ul>
      </fieldset>
      <br />
      <fieldset>
        <legend>Fun and Random</legend>

        <ul>
          <li>
            <span onClick={() => fasthandle("dwemmer")}>Elder Scrolls Theory</span>
          </li>
          <li>
            <span onClick={() => fasthandle("pokemonCalc")}>Damage Calulation for Pokemon Red</span>
          </li>
          <li>
            <span onClick={() => fasthandle("crach")}>Crach The Site?</span>
          </li>
          <li>
            <span onClick={() => fasthandle("quotes")}>List of Quotes</span>
          </li>
          <li>
            <span onClick={() => fasthandle("dnd")}>DnD Character</span>
          </li>
          <li>
            <span onClick={() => fasthandle("quiz")}>Quiz</span>
          </li>
          <li>
            <span onClick={() => fasthandle("movieIdees")}>Movie Idées</span>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}

export default Flower;
