import { HTMLProject } from "../../LISTS/Projects.js";

const project = new HTMLProject()
const area = document.querySelector('#HTML-AREA')
console.log(project.component);
area?.append(project.component)