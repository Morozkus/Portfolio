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

export interface ICreateElement {

    element: ELEMENT

    getElement(): HTMLElement
    createElement(params: TParams): HTMLElement
    setClassName(classes: string[] | undefined): void
    setAttribute(attributes: attribute[] | undefined): void
    setTextContent(text: string | undefined): void
    setCallback(callback: CallBackFunc): void
    addInnerElement(element: AddInsideElement): void
}

type link = [string, string]
export interface INavCatalogComponent {
    element: ICreateElement
    links: ICreateElement

    createFragmentLinks(links: link[]): ICreateElement
    insertFragment(fragment: ICreateElement): void
}