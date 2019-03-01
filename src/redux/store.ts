import { baseReducer } from "./base-reducer";
import { initialState } from "./state";
import { createStore } from "redux";

export const store = createStore(baseReducer, initialState);

console.log(store);
console.log(store.getState());

console.warn("ASDASD");
