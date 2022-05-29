export interface GeneralObject {
    [key:string]: any;
}

export interface LinkConfig {
    link: string;
    label: string;
    children?: LinkConfig[]
}

