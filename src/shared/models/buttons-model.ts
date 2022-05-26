export interface ButtonProperties {
    type?:ButtonType;
    class?:string;
    data?:any;
}
export type ButtonType = 'button' | 'submit';