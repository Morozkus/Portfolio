interface TOptions {
    title: string,
    href: string,
    leftPanel?: boolean
}

type TRenderHandler = (res: any, status: number, view: string, options: TOptions) => void

const renderHandler: TRenderHandler = function (res, status, view, options): void {
    return res.status(status).render(view, { ...options })
}

export default renderHandler