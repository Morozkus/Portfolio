import CreateElement from "./../createsElement/CreateElement.js";
import Card from "./../createsElement/Card.js";

type Options = {
    imgSrc: string | undefined,
    imgLink: string | undefined,
    bookLink: string | undefined,
}

export default class BookCardComponent extends Card {
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

        const imgLink = new CreateElement<HTMLLinkElement>({
            tag: 'a',
            className: ['card__img-container'],
            attribute: [['style', 'background-color: lightGray;'], ['target', '_blank']]
        })

        const img = new CreateElement<HTMLImageElement>({
            tag: 'img',
            className: ['card__img', 'card__item_border'],
            attribute: [['src', this.options.imgSrc !== undefined ? this.options.imgSrc : '#']]
        })

        if (this.options.imgLink) {
            imgLink.setAttribute([['href', this.options.imgLink]])

        } else {
            img.setAttribute([['style', 'opacity: 0.9; cursor: not-allowed;']])
        }
        imgLink.addInnerElement(img)

        const bookContainer = new CreateElement<HTMLDivElement>({
            tag: 'div',
            className: ['card__book-link', 'card__item', 'card__item_border']
        })

        const bookLink = new CreateElement<HTMLLinkElement>({
            tag: 'a',
            className: ['card__link'],
            textContent: 'Book',
            attribute: [['target', '_blank']]
        })

        if (this.options.bookLink) {

            bookLink.setAttribute([['href', this.options.bookLink]])
            bookContainer.setClassName(['card__item_active'])
        } else {

            bookLink.setAttribute([['style', 'opacity: 0.5; cursor: not-allowed;']])
        }
        bookContainer.addInnerElement(bookLink)

        this.element.addInnerElement(imgLink)
        this.element.addInnerElement(bookContainer)
        return this.getHtmlElement()
    }
}