import CreateElement from "../createsElement/CreateElement.js";
import NavCatalogComponent from "./NavCatalogComponent.js";

export default class NavComponent {
    viewNavElement: CreateElement<HTMLUListElement>
    catalogs: string[]
    links: [string, string][][]

    constructor () {
        this.viewNavElement = new CreateElement({tag: 'nav', className: ['header__nav', 'nav']})
        this.catalogs = ['Проекты', 'Книги']
        this.links = [
            [['Верстка', '/project/html'], ['Javascript/TypeScript', '/project/javascript']],
            [['Верстка', '/books/html'], ['Javascript/TypeScript', '/books/javascript'], ['React', '/books/react']]
        ]
        this.viewNav()
    }

    getHtmlElement() {
        return this.viewNavElement.getElement();
    }

    viewNav () {
        const navList = new CreateElement<HTMLUListElement>({tag: 'ul', className: ['nav__list']})

        for (let i = 0; i < this.catalogs.length; i++) {
            const CATALOG = new NavCatalogComponent({textContent: this.catalogs[i], arrayLink: this.links[i]})

            navList.addInnerElement(CATALOG.element)
        }

        this.viewNavElement.addInnerElement(navList)

        const AREA = new CreateElement<HTMLDivElement>({tag: 'div', className: ['header__area'], attribute: [['id', 'AREA']]})
        this.viewNavElement.addInnerElement(AREA)
    }
}