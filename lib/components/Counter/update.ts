import { None, Increment, Decrement } from "./messages";
import { Action, Model } from "./types.d";

const update = (action: Action): Model => {
    switch (action.message) {
      case Increment:
        return { total: action.model.total + 1 };
      case Decrement:
        return { total: action.model.total - 1 };
      case None:
      default:
        return action.model;
    }
};

export default update;
