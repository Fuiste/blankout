import { createStore } from "redux";
import { baseReducer } from "./base-reducer";

export const store = createStore(baseReducer);
