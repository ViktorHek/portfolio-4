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

const htmlList = {
  intro: { ...intro, index: 0 },
  dvdScreen: { html: <DvdScreen/>, title: "DVD Screen", index: 1 },
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
  // editor: { ...editor, index: 13 },
};

export default htmlList;
