import { combineReducers } from "redux";

declare var require: any;

const createReducers = () => {
  const context = require.context("components", true, /reducers\.(ts|js)/);
  const toReducer = (reducers, key) => (
    {
      ...reducers,
      ...(context(key).default)
    }
  );

  const reducers = context.keys().reduce(toReducer, {});

  return combineReducers(reducers);
};

export { createReducers };
