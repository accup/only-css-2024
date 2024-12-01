declare const StateClassName: unique symbol;

export type StateClassName = string & { [StateClassName]: "branded" };
