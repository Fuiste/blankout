import { State, initialState } from "./state";
import { Action } from "./action-types";

export function baseReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case "PopItem":
      return { ...state };
    case "PushItem":
      return { ...state };
    default:
      return state;
  }
}
