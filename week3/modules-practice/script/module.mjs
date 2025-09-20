import byuiCourse from "./course.mjs";
import { setSectionSelection } from "./sections.mjs";       
import { setTitle, renderSections } from "./output.mjs";


setTitle(byuiCourse);
renderSections(byuiCourse.sections);
setSectionSelection();


document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});

