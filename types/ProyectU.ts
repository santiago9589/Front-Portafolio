interface TecnhoI{
    id:number,
    name:string
    logo:string
}

interface LinksI{
    id:number,
    link:string,
    logo:string,
    name:string
}

export interface ProyectU {
    id:number
    title: string
    photo: string
    techno: TecnhoI[]
    links:LinksI[]
}

export interface ProyectStack {
    id:number
    title: string
    techno: TecnhoI[]
}