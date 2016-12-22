import { None, Increment, Decrement } from "./messages";

export type Message
  = typeof None
  | typeof Increment
  | typeof Decrement;

export type Model = { total: number };
export type Action = { message: Message, model: Model };
export type Props = { total: number, onClick: Function };
