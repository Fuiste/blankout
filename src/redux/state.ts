export interface State {
  items: Item[];
}

export interface Item {
  name: string;
  count: number;
}

export const InitialState: State = {
  items: [],
};
