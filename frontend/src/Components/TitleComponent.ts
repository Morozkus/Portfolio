import CreateElement from "../createsElement/CreateElement.js";

export default class TitleComponent {
    titleList: CreateElement<HTMLUListElement>
    targetClass: string

    constructor(targetClass: string) {
        this.targetClass = targetClass
        this.titleList = this.createTitleLink()
    }

    createTitleLink(): CreateElement<HTMLUListElement> {
        const titleList = new CreateElement<HTMLUListElement>({ tag: 'ul', className: ['panel__title-list'] })
        const titles = document.querySelectorAll(this.targetClass)

        if (titles) {

            titles.forEach((element, index) => {
                const a = new CreateElement<HTMLLinkElement>({
                    tag: 'a',
                    attribute: [['href', '#' + element.getAttribute('id') || '#']],
                    textContent: element.textContent || `${index}. Заголовок`,
                    className: ['panel__title-link']
                })
                titleList.addInnerElement(a)
            });
        }

        return titleList
    }
}