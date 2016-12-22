import { combineReducers } from "redux";

const active = (initialState: boolean = true, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

const createReducers = () => combineReducers({ active });

export { createReducers };
