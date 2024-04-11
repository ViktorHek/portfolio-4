function Flower({ fasthandle }) {
  return (
    <div className="content">
      <p>Hello! My name is flower and I work here as a refference manual. </p>
      <p>
        If you don't want to go through the hustle of finding all 25 pop-up windows, you'll find all
        of them below. But know that if you open a pop-up window trough me, it won't be added to
        youre colleded windows.
      </p>
      <p>
        <strong>Relevant Info</strong>
      </p>
      <ul>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "education")}>Education</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "cv")}>Resumé</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "pb")}>Personal Letter</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "contact")}>Contact Information</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "reference")}>Reference</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "links")}>Links</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "links")}>Links</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "personality")}>Personality</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "journey")}>Journey</span>
        </li>
      </ul>
      <p>
        <strong>Projects</strong>
      </p>
      <ul>
        <li>
          <span onClick={(event) => fasthandle(event, "hobbyProjects")}>Hobby Projects</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "editorDude")}>WYSIWYG-Editor</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "dvdScreen")}>DVD screen</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "font")}>My Font</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "orangeDuddle")}>Art</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "bigBg")}>Art, but bigger</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "doodleList")}>Art Gallery</span>
        </li>
      </ul>
      <p>
        <strong>Fun and Random</strong>
      </p>

      <ul>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
        <li>
          <span onClick={(event) => fasthandle(event, "workExperience")}>Work experience</span>
        </li>
      </ul>
    </div>
  );
}

export default Flower;
