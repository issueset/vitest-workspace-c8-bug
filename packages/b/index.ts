import { functionA } from "../a";

export function functionB() {
  console.log("B1");
  const callback = () => {
    console.log("B3");
  };
  functionA(callback);
  console.log("B2");
}
