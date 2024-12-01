import type { StateClassName } from "./StateClassName";

export function getStateId(state: StateClassName): string {
  return state.replace(/(?:^\s*|\s+)/g, ".").replace(/\s*$/g, "");
}
