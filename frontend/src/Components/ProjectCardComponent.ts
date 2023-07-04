import CreateElement from "./../createsElement/CreateElement.js";
import Card from "./../createsElement/Card.js";
import { ICreateElement } from './../Interfaces/Interface.js'

type Options = {
    imgSrc: string | undefined,
    GHLink: string | undefined,
    projectLink: string | undefined
}

export default class ProjectCardComponent extends Card {
    options: Options

    constructor(params: Options) {
        super()
        this.options = params
        this.createCard()
    }

    getHtmlElement(): HTMLElement {
        return this.element.getElement();
    }

    createCard(): HTMLElement {
        const img = new CreateElement<HTMLImageElement>({ tag: 'img', className: ['card__img', 'card__img-container', 'card__item_border'], attribute: [['src', this.options.imgSrc !== undefined ? this.options.imgSrc : '#']] })

        const ghContainer = new CreateElement<HTMLDivElement>({ tag: 'div', className: ['card__github-link', 'card__item', 'card__item_border'] })
        const ghLink = new CreateElement<HTMLLinkElement>({ tag: 'a', className: ['card__link'], textContent: 'GitHub' })
        if (this.options.GHLink) {

            ghLink.setAttribute([['href', this.options.GHLink]])
            ghContainer.setClassName(['card__item_active'])
        } else {

            ghLink.setAttribute([['style', 'opacity: 0.5; cursor: not-allowed;']])
        }
        ghContainer.addInnerElement(ghLink)

        const projectContainer = new CreateElement<HTMLDivElement>({ tag: 'div', className: ['card__project-link', 'card__item', 'card__item_border'] })
        const prLink = new CreateElement<HTMLLinkElement>({ tag: 'a', className: ['card__link'], textContent: 'Project' })
        if (this.options.projectLink) {

            prLink.setAttribute([['href', this.options.projectLink]])
            projectContainer.setClassName(['card__item_active'])
        } else {

            prLink.setAttribute([['style', 'opacity: 0.5; cursor: not-allowed;']])
        }
       
        projectContainer.addInnerElement(prLink)

        this.getHtmlElement().append(img.getElement(), ghContainer.getElement(), projectContainer.getElement())
        return this.getHtmlElement()
    }
}