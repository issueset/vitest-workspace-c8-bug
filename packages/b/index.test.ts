import { functionB } from "./index";
import { it, expect } from "vitest";

it("should run", () => {
  expect(functionB()).toBeUndefined();
});
