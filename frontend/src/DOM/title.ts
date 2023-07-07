import TitleComponent from "../Components/TitleComponent.js";

const panel = document.querySelector('#panel')
const titleComponent = new TitleComponent('.title')

panel?.append(titleComponent.titleList.getElement())