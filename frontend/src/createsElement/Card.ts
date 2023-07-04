import CreateElement from "./CreateElement.js";
import { ICreateElement, ICard } from './../Interfaces/Interface.js'

export default class Card implements ICard {
    element: ICreateElement;

    constructor() {
        this.element = new CreateElement<HTMLDivElement>({tag: 'div', className: ['card', 'card_display', 'card_border']})
    }

    insertCard(node: HTMLElement): void {
        node.append(this.element.getElement())
    }
}