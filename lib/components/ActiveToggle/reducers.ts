import { combineReducers } from "redux";
import { Toggle } from "./actions";
import { Action } from "./types.d";

const active = (initialState = true, action: Action) => {
  switch (action.type) {
    case Toggle:
      return !initialState;
    default:
      return initialState;
  }
};

export default { active };
