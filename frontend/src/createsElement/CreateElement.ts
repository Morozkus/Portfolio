/* eslint-disable @typescript-eslint/no-non-null-assertion */
type attribute = [string, string]
type TParams = {
    tag: string
    className?: string[];
    textContent?: string;
    attribute?: attribute[];
    callback?: CallBackFunc

}
type ELEMENT = HTMLElement;
type AddInsideElement = string | ICreateElement
type CallBackFunc = (e: Event) => void;


interface ICreateElement {
    element: ELEMENT

    getElement(): HTMLElement
    createElement(params: TParams): HTMLElement
    setClassName(classes: string[] | undefined): void
    setAttribute(attributes: attribute[] | undefined): void
    setTextContent(text: string | undefined): void
    setCallback(callback: CallBackFunc): void
    addInnerElement(element: AddInsideElement): void
}

export default class CreateElement<T extends HTMLElement> implements ICreateElement {
    element: T

    constructor(params: TParams) {
        this.element = this.createElement(params);
    }

    getElement(): T {
        return this.element
    }

    createElement(params: TParams): T {
        this.element = document.createElement(params.tag) as T

        this.setClassName(params.className)
        this.setTextContent(params.textContent)
        this.setAttribute(params.attribute)


        return this.element
    }

    setClassName(classes: string[] | undefined): void {
        if (!classes) return
        classes.map((item) => this.element!.classList.add(item))
    }

    setTextContent(text: string | undefined): void {
        if (!text) return

        this.element.textContent = text;
    }

    setAttribute(attributes: attribute[] | undefined): void {
        if (!attributes) return

        attributes.map(el => {
            this.element?.setAttribute(el[0], el[1])
        })
    }

    setCallback(callback: CallBackFunc): void {
        this.element?.addEventListener('click', (event) => callback(event));
    }

    addInnerElement(element: any) {
        if (element instanceof CreateElement) {
            this.element?.append(element?.getElement());
        } else {
            this.element?.append(element);
        }
    }
}