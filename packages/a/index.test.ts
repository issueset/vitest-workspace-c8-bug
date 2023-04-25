import { functionA } from "./index";
import { it, expect } from "vitest";

it("should run", () => {
  expect(functionA()).toBeUndefined();
});

