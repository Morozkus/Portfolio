import BookCardComponent from "../Components/BookCardCompoent.js"

export class Programmer {
    component: DocumentFragment

    constructor() {
        this.component = this.createComponent()
    }

    createComponent(): DocumentFragment {
        const fragment: DocumentFragment = new DocumentFragment()
        const cardList: BookCardComponent[] = []

        function createCard(bookLink: string | undefined, imgLink: string | undefined, imgSrc: string | undefined): BookCardComponent {
            return new BookCardComponent({ bookLink: bookLink, imgLink: imgLink, imgSrc })
        }

        const card1 = createCard(
            'https://www.gotoadm.ru/files/eloquentjavascript_ru.pdf',
            undefined,
            'https://avatars.mds.yandex.net/get-mpic/5538428/img_id3646788749286984301.jpeg/orig'
        )

        cardList.push(card1)

        cardList.forEach(el => {
            fragment.append(el.getHtmlElement())
        })
        return fragment
    }
}