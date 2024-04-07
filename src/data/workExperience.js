const title = "Work Experience";
const id = 8;
const size = "big";
const html = (
  <div className="content">
    <h3>Talentech internship</h3>
    <p style={{ color: "#0b1350", margin: 4, fontSize: "1em" }}>November 2023 - April 2024</p>

    <ul>
      <li>
        <strong>Company:&nbsp;</strong>Talentech is a global company that provides a recruitment
        platform.
      </li>
      <li>
        <strong>Skills:&nbsp;</strong>typescript, UX/UI, Angular, Cypress, Agile development,
        Python, Bootstrap, Git, Node.js.
      </li>
      <li>
        <strong>Description:&nbsp;</strong>I woked for the depatment that developed a recruitment
        platform. Their codebase is a culmination of year of work from many differant people.
        therefore, i quickly learned to read legasy-code, whrite scalable code and to collaborate
        with colleagues in different roles. The cases assigned to me where everything between
        obscure buggs to my own modals. If you, the reader, uses ReachMe. I can happily say that I'm
        the one who created the modal you use to add me to the system.
      </li>
    </ul>
    <br />
    <h3>Customer First - Full-stack Dev</h3>
    <p style={{ color: "#0b1350", margin: 4, fontSize: "1em" }}>June 2021 - February 2022</p>
    <ul>
      <li>
        <strong>Company:&nbsp;</strong>Customer First is a smaller B2B company that provides a
        communicationplatform with phone, mail, chatts and a lot of focus on customizability.
      </li>
      <li>
        <strong>Skills:&nbsp;</strong>Javascript, Vue, Vuex, React Native, jQuery, SQL, Node.js,
        WebSocket, Git, JWT.
      </li>
      <li>
        <strong>Cases:&nbsp;</strong>It started with smaller features, joining customer meetings and
        listening in on planning sessions. After three month I got my own client. This gave me the
        opportunity to be part of a real project from begining to end. My most important lesson was
        to know my onw ability. I use that knowledge to help clients understand what is posible, how
        much resources a feature will require and (most importanty) be able to provide better
        alternatives.
      </li>
    </ul>
    <br />
    <h3>Other Work Experiences</h3>
    <p style={{ color: "#0b1350", margin: 4, fontSize: "1em" }}>June 1996 - May 2020</p>

    <ul>
      <li className="lid">
        <strong>Karlssons Skola:&nbsp;</strong>Substitute Teacher<p>| Mars 2020 - May 2020</p>
      </li>
      <li className="lid">
        <strong>Västra Hisingens Stadsdelsförvaltning:&nbsp;</strong>Comunicatior internship
        <p>| Mars 2019 - June 2019</p>
      </li>
      <li className="lid">
        <strong>Vigårda:&nbsp;</strong>waiter | <p>July 2016 - February 2017</p>
      </li>
      <li className="lid">
        <strong>Utö Skola:&nbsp;</strong>Substitute Teacher<p>| Mars 2016 - May 2016</p>
      </li>
      <li className="lid">
        <strong>Carolas Lilla Trädgård:&nbsp;</strong>gardener
        <p>July 2015 - December 20215</p>
      </li>
      <li className="lid">
        <strong>UNHCR:&nbsp;</strong>Frontliner
        <p>June 2015 - July 2015</p>
      </li>
      <li className="lid">
        <strong>Båtmässan Älvsjömässan:&nbsp;</strong>Project Leader
        <p>January 2013 - Mars 2013</p>
      </li>
    </ul>
    <br />
  </div>
);

const workExperience = { title, id, size, html };

export default workExperience;
