import { combineReducers } from "redux";
import { TOGGLE } from "actions";

const active = (initialState: boolean = true, action) => {
  switch (action.type) {
    case TOGGLE:
      return !initialState;
    default:
      return initialState;
  }
};

const createReducers = () => combineReducers({ active });

export { createReducers };
