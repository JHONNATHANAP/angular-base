import { ButtonProperties } from "./buttons-model";

export type ItemsListProperties = ItemListProperties[];
export interface ItemListProperties {
  img?: { class?: string; url?: string };
  title?: { class?: string; name?: string };
  subtitle?: { class?: string; name?: string };
  item?: any;
  id:number;
}
export interface ItemListDetailProperties extends ItemListProperties{
    buttons?:ItemDetailButtons[];
    description?: { class?: string; value?: string };
    id:number;

}
export interface ItemDetailButtons extends ButtonProperties{
    title:string;
    event:string;
}