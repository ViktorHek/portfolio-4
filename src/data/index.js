import intro from "./intro";
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
import Flower from "./Flower";

const htmlList = {
  intro: { ...intro, index: 0 },
  dvdScreen: { html: <DvdScreen />, title: "DVD Screen", index: 1 },
  cv: { ...cv, index: 2 },
  pb: { ...pb, index: 3 },
  skills: { ...skills, index: 4 },
  workExperience: { ...workExperience, index: 5 },
  hobbyProjects: { ...hobbyProjects, index: 6 },
  education: { ...education, index: 7 },
  personality: { ...personality, index: 8 },
  journey: { ...journey, index: 9 },
  reference: { ...reference, index: 10 },
  dwemmer: { ...dwemmer, index: 11 },
  pokemonCalc: { ...pokemonCalc, index: 12 },
  quotes: { ...quotes, index: 13 },
  links: { ...links, index: 14 },
  contact: { ...contact, index: 15 },
  orangeDuddle: { ...orangeDuddle, index: 16 },
  movieIdees: { ...movieIdees, index: 17 },
  hussle: { ...hussle, index: 18 },
  quiz: { html: <Quiz />, title: "Quiz", index: 19 },
  dnd: { ...dnd, index: 20 },
  font: { ...font, index: 21 },
  bigBg: { ...bigBg, index: 22 },
  crach: { html: <Crach />, title: "Please don't", index: 23 },
  doodleList: { ...doodleList, index: 24 },
  flower: { html: 'penis', title: 'Index', index: 25 },
};

export default htmlList;
