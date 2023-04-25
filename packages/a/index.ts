export function functionA(callback?: () => void) {
  console.log("A1");
  if (Math.random() > -2) {
    console.log("A2");
  }
  if (Math.random() < -2) {
    console.log("A3");
  }
  if (callback) {
    console.log("A4");
    callback()
  }
  return;
}
