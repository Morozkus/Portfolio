import CreateElement from "../createsElement/CreateElement.js";
import { ICreateElement, INavCatalogComponent } from './../Interfaces/Interface.js'

type params = {
    textContent: string,
    arrayLink: [string, string][]
}

export default class NavCatalogComponent implements INavCatalogComponent {
    element: CreateElement<HTMLLIElement>
    links: ICreateElement;

    constructor(params: params) {
        this.element = new CreateElement<HTMLLIElement>({ tag: 'li', className: ['nav__item', 'nav__item_font-size'], textContent: params.textContent })
        this.links = this.createFragmentLinks(params.arrayLink)
        this.insertFragment(this.links)
    }

    createFragmentLinks(links: [string, string][]): ICreateElement {
        const fragment = new CreateElement({tag: 'div', className: ['AREA__element', 'AREA__element_display']})
        const elementLinks: ICreateElement[] = links.map(el => {
            return new CreateElement({ tag: 'a', textContent: el[0], attribute: [['href', el[1]]] })
        })
        elementLinks.forEach(el => {
            fragment.getElement().append(el.getElement())
        })

        return fragment
    }

    insertFragment(fragment: ICreateElement): void {
        this.element.setCallback((() => {
            const AREA = document.querySelector('#AREA')

            AREA!.innerHTML = ''
            
            AREA!.append(fragment.getElement())
        }))
    }
}