import { HTMLProject } from "../../LISTS/Projects.js";

const project = new HTMLProject()
const area = document.querySelector('#AREA2')
console.log(project.component);
area?.append(project.component)