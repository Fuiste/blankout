export interface State {
  items: Item[];
}

export interface Item {
  name: string;
  count: number;
}

export const initialState: State = {
  items: [{ name: "Test", count: 2 }, { name: "Rudy", count: 42 }],
};
