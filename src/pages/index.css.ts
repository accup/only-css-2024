import { style } from "@vanilla-extract/css";

export const body = style([
  {
    color: "red",
  },
]);

export const label = style([
  {
    cursor: "pointer",
  },
  {
    selectors: {
      "input:checked ~ &": {
        color: "blue",
      },
    },
  },
]);
