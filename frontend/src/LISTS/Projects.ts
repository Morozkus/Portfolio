import ProjectCardComponent from "../Components/ProjectCardComponent.js"

export class HTMLProject {
    component: DocumentFragment

    constructor() {
        this.component = this.createComponent()
    }

    createComponent(): DocumentFragment {
        const fragment: DocumentFragment = new DocumentFragment()
        const cardList: ProjectCardComponent[] = []

        function createCard(ghlink: string | undefined, projectLink: string | undefined, imgLink: string | undefined, imgSrc: string | undefined): ProjectCardComponent {
            return new ProjectCardComponent({ GHLink: ghlink, projectLink: projectLink, imgLink: imgLink, imgSrc: imgSrc })
        }

        const card1 = createCard('https://github.com/Morozkus/kvast-first',
            'https://morozkus.github.io/kvast-first/',
            '/project/html/kvast',
            'https://3.downloader.disk.yandex.ru/preview/3596c4bd545c8f07bee92c5cc2a6bc9b4e6e366b6b67890b53095289e051664d/inf/nXaaFsc61FlFz8ipUFivK6gb-cEJFEhZa36rK0FZemrI60j-DJDohsxvAuJbUY5v3V51dq1HohpVh_mRUWEZsg%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-04%20211839.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card2 = createCard('https://github.com/Morozkus/Travel-Agency',
            'https://morozkus.github.io/Travel-Agency/',
            '/project/html/explore',
            'https://4.downloader.disk.yandex.ru/preview/1e1d5d8de8b013b4e03d79d9a987d8bfd7cf4b552e316c94e674282b6bcaff72/inf/yGDq_X7QFSJSL68y2LHDHqK9buSUiRgKQFOxtA9L5op-8T-s-he0Mg1YyKEgGO4XmKfqcfpChPqkZJKxk2y5GA%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-04%20205447.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card3 = createCard('https://github.com/Morozkus/Mac-chat',
            'https://morozkus.github.io/Mac-chat/',
            '/project/html/chat',
            'https://4.downloader.disk.yandex.ru/preview/7df688f25c0458be9081b1c03126e9caff71cdecdc071cebe6ebd733f058d8b6/inf/fA1guatndxcXSooZGhwCoLt7vcHHBdYkuhNKS14Pfe7Dh0PuNR6WwHfkZMgtB00Ka7U1aDdzvaJov7953VTaOQ%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-04%20211659.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card4 = createCard('https://github.com/Morozkus/CutSpace',
            'https://morozkus.github.io/CutSpace/',
            '/project/html/cutspace',
            'https://2.downloader.disk.yandex.ru/preview/3027cf7fbc027dfdb02907a495e7706f2d097702369f02aa5fba2718125bbc45/inf/etHrIFbaFS8f5afo0gMSf40YYvRr4Kl3uU7bj5pFg8kfS7eXjmn5kNne6sbZt8aCuKWMf6yaTQsLAOBIy_OutA%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-04%20212748.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        cardList.push(card1, card2, card3, card4)

        cardList.forEach(el => {
            fragment.append(el.getHtmlElement())
        })
        return fragment
    }
}

export class JavascriptProjects {
    component: DocumentFragment

    constructor() {
        this.component = this.createComponent()
    }

    createComponent(): DocumentFragment {
        const fragment: DocumentFragment = new DocumentFragment()
        const cardList: ProjectCardComponent[] = []

        function createCard(ghlink: string | undefined, projectLink: string | undefined, imgLink: string | undefined, imgSrc: string | undefined): ProjectCardComponent {
            return new ProjectCardComponent({ GHLink: ghlink, projectLink: projectLink, imgLink: imgLink, imgSrc: imgSrc })
        }

        const card1 = createCard('https://github.com/Morozkus/repeat_that',
            'https://morozkus.github.io/repeat_that/',
            '/project/javascript/repeat',
            'https://2.downloader.disk.yandex.ru/preview/121fb8b23a6f779b5fb544b44f9c7816296f9785e236bdf6b915d98984edeea4/inf/TaEepgDMVZ3MrWEQAs2dGDP14Q9UKWha8netx5qf9Bgx-ps0PmANZastpPhYBVdVVBnFjsmqpkeSnEdKe8G1Lw%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-05%20011408.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card2 = createCard('https://github.com/Morozkus/Tic-tac-toe',
            'https://morozkus.github.io/Tic-tac-toe/',
            '/project/javascript/tic-tac-toe',
            'https://4.downloader.disk.yandex.ru/preview/5878b5e27ef33c52930e16ba24328a61c74e7e0200460ecaf320ce2a315b8c5b/inf/Ha2owDKy0egfY0roeqnXLldkIi_mNGfI1X5cybJYUmK0lI5xprhbpKxYPKpV7afJFDULJksmtQU7d4s3Ix5q7Q%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-05%20011538.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card3 = createCard('https://github.com/rolling-scopes-school/morozkus-JSFE2023Q1/tree/shelter',
            'https://rolling-scopes-school.github.io/morozkus-JSFE2023Q1/shelter/',
            '/project/javascript/pets',
            'https://3.downloader.disk.yandex.ru/preview/cc7812eb7a65fb4997e330bd8fa76d8b9a4782a4584d43090555569f991e0d74/inf/iTNkI8EULZ8fmwYpDw0y30tQTcFVR4IxP2ubjENN1K0is7pCZ0QCUAbYV1otO-cn1-bFU9aM23gs90XJzHrC4Q%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-05%20011842.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card4 = createCard('https://github.com/Morozkus/Virtual-Keyboard/tree/gh-pages',
            'https://morozkus.github.io/Virtual-Keyboard/',
            '/project/javascript/keyboard',
            'https://3.downloader.disk.yandex.ru/preview/650787bcb1108fe2953be77a7344e3c5d5b55cf164ae30973e61b17d0616e311/inf/c8cQWp1UW9jJiaxS7Zy0JjFzl_KjIRf9b2AgI5T6FfO0VbVMJNnAr-WdNbnxxXr-5MSOHy4ZsSx78lBuaCSEhQ%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-05%20012007.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card5 = createCard('https://github.com/Morozkus/hospital',
            undefined,
            '/project/javascript/hospital',
            'https://4.downloader.disk.yandex.ru/preview/19422f6ff63d13df9f7d9991016c2cffe38b97418dbedfc5087015b3eb0fa9a4/inf/5emlrgimS19mg5UoB8_Gi9TGSo2hagoY3ZvS0GdiIb9Vsm0BN6QT-YgqFmyTI9Xq5xzqY1FRS5oENFKz8k__4Q%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-05%20013505.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        const card6 = createCard('https://github.com/Morozkus/Portfolio/tree/dev',
            undefined,
            '/project/javascript/portfolio',
            'https://4.downloader.disk.yandex.ru/preview/8f329879b598aff59dde550828db2d7790de7c5f02f0e1a12d46e33853830a3c/inf/p5J5xhmbS0xU0kjW_TQtWglxV2tDyk1EWuNoJOpkzgAcSCXEkExckRKRIlAtUtWBMoe4JrkLUhWU13-WTBgfjA%3D%3D?uid=1676214267&filename=Снимок%20экрана%202023-07-05%20013141.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1676214267&tknv=v2&size=1872x940')

        cardList.push(card1, card2, card3, card4, card5, card6)

        cardList.forEach(el => {
            fragment.append(el.getHtmlElement())
        })
        return fragment
    }
}