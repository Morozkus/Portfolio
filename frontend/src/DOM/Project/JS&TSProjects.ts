import { JavascriptProjects } from "../../LISTS/Projects.js";

const project = new JavascriptProjects()
const area = document.querySelector('#JS-AREA')
console.log(project.component);
area?.append(project.component)