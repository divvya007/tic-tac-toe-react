export default function Winner(inputArray) {
  let result = null;
  if (
    (inputArray[0][0] === "X" &&
      inputArray[0][1] === "X" &&
      inputArray[0][2] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[0][1] === "O" &&
      inputArray[0][2] === "O") ||
    (inputArray[0][0] !== null &&
      inputArray[0][1] !== null &&
      inputArray[0][2] !== null)
  ) {
    result = 1;
  }
  if (
    (inputArray[1][0] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[1][2] === "X") ||
    (inputArray[1][0] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[1][2] === "O") ||
    (inputArray[1][0] !== null &&
      inputArray[1][1] !== null &&
      inputArray[1][2] !== null)
  ) {
    result = 2;
  }
  if (
    (inputArray[2][0] === "X" &&
      inputArray[2][1] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[2][0] === "O" &&
      inputArray[2][1] === "O" &&
      inputArray[2][2] === "O") ||
    (inputArray[2][0] !== null &&
      inputArray[2][1] !== null &&
      inputArray[2][2] !== null)
  ) {
    result = 3;
  }
  if (
    (inputArray[0][0] === "X" &&
      inputArray[1][0] === "X" &&
      inputArray[2][0] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[1][0] === "O" &&
      inputArray[2][0] === "O") ||
    (inputArray[0][0] !== null &&
      inputArray[1][0] !== null &&
      inputArray[2][0] !== null)
  ) {
    result = 4;
  }
  if (
    (inputArray[0][1] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][1] === "X") ||
    (inputArray[0][1] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][1] === "O") ||
    (inputArray[0][1] !== null &&
      inputArray[1][1] !== null &&
      inputArray[2][1] !== null)
  ) {
    result = 5;
  }
  if (
    (inputArray[0][2] === "X" &&
      inputArray[1][2] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[0][2] === "O" &&
      inputArray[1][2] === "O" &&
      inputArray[2][2] === "O") ||
    (inputArray[0][2] !== null &&
      inputArray[1][2] !== null &&
      inputArray[2][2] !== null)
  ) {
    result = 6;
  }
  if (
    (inputArray[0][0] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][2] === "O") ||
    (inputArray[0][0] !== null &&
      inputArray[1][1] !== null &&
      inputArray[2][2] !== null)
  ) {
    result = 7;
  }
  if (
    (inputArray[0][2] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][0] === "X") ||
    (inputArray[0][2] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][0] === "O") ||
    (inputArray[0][2] !== null &&
      inputArray[1][1] !== null &&
      inputArray[2][0] !== null)
  ) {
    result = 8;
  }
  return result;
}
