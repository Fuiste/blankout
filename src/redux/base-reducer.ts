import { State, InitialState } from "./state";
import { Action } from "./action-types";

export function baseReducer(state: State = InitialState, action: Action) {
  switch (action.type) {
    case "PopItem":
      state.items.pop();
      return state;
    case "PushItem":
      state.items.push(action.item);
      return state;
    default:
      return state;
  }
}
