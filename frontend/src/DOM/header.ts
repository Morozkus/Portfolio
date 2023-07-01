import NavComponent from "../Components/NavComponent.js";

const navigation = new NavComponent()
const header = document.querySelector('#header')

header?.append(navigation.getHtmlElement())