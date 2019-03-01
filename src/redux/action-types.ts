import { Item } from "./state";

export interface PushItem {
  type: "PushItem"
  item: Item
}

export interface PopItem {
  type: "PopItem"
}

export type Action = 
  | PushItem
  | PopItem;