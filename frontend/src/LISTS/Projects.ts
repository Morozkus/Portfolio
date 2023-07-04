import ProjectCardComponent from "../Components/ProjectCardComponent.js"

export class HTMLProject {
    component: DocumentFragment

    constructor() {
        this.component = this.createComponent()
    }

    createComponent(): DocumentFragment {
        const fragment: DocumentFragment = new DocumentFragment()
        const obj = new ProjectCardComponent({ GHLink: '#', projectLink: undefined, imgSrc: 'https://avatars.mds.yandex.net/get-ydo/3925651/2a00000182efa44f060fadd607be768157e3/diploma' })
        const obj2 = new ProjectCardComponent({ GHLink: undefined, projectLink: undefined, imgSrc: 'https://avatars.mds.yandex.net/get-ydo/3925651/2a00000182efa44f060fadd607be768157e3/diploma' })
        const obj3 = new ProjectCardComponent({ GHLink: undefined, projectLink: undefined, imgSrc: 'https://avatars.mds.yandex.net/get-ydo/3925651/2a00000182efa44f060fadd607be768157e3/diploma' })

        fragment.append(obj.getHtmlElement(), obj2.getHtmlElement(), obj3.getHtmlElement())
        return fragment
    }
}