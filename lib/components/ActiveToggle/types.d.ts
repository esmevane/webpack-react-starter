import { Toggle } from "./actions";

type Messages = typeof Toggle;
type Action = { type: Messages };

export { Action, Messages };
