// import intro from "./intro";
import workExperience from "./workExperience";
import hobbyProjects from "./hobbyProjects";
import skills from "./skills";
import education from "./education";
import cv from "./cv";
import pb from "./pb";
import personality from "./personality";
import journey from "./journey";
import reference from "./reference";
import dwemmer from "./dwemmer";
import pokemonCalc from "./pokemonCalc";
import DvdScreen from "./DvdScreen";
import quotes from "./quotes";
import links from "./links";
import contact from "./contact";
import orangeDuddle from "./orangeDuddle";
import movieIdees from "./movieIdees";
import hussle from "./hussle";
import Quiz from "./Quiz";
import dnd from "./dnd";
import font from "./font";
import bigBg from "./bigBg";
import Crach from "./Crach";
import doodleList from "./doodleList";
import easterEgg from "./easterEgg";
import final from "./final";
import "./index.css"

const htmlList = {
  intro: { html: "penis", title: "Tutorial" },
  dvdScreen: { html: <DvdScreen />, title: "DVD Screen" },
  cv: { ...cv },
  pb: { ...pb },
  skills: { ...skills },
  workExperience: { ...workExperience },
  hobbyProjects: { ...hobbyProjects },
  education: { ...education },
  personality: { ...personality },
  journey: { ...journey },
  reference: { ...reference },
  dwemmer: { ...dwemmer },
  pokemonCalc: { ...pokemonCalc },
  quotes: { ...quotes },
  links: { ...links },
  contact: { ...contact },
  orangeDuddle: { ...orangeDuddle },
  movieIdees: { ...movieIdees },
  hussle: { ...hussle },
  quiz: { html: <Quiz />, title: "Quiz" },
  dnd: { ...dnd },
  font: { ...font },
  bigBg: { ...bigBg },
  crach: { html: <Crach />, title: "Please don't" },
  doodleList: { ...doodleList },
  easterEgg: { ...easterEgg },
  flower: { html: "penis", title: "Index" },
  final: { ...final },
};

export default htmlList;
