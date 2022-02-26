// TODO: The name of the function should be camel case
// The name of the function should be "getStrikeType"
export default function Winner(inputArray) {
  let result = null;
  if (
    (inputArray[0][0] === "X" &&
      inputArray[0][1] === "X" &&
      inputArray[0][2] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[0][1] === "O" &&
      inputArray[0][2] === "O")
  ) {
    result = 1;
    return result;
  }
  if (
    (inputArray[1][0] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[1][2] === "X") ||
    (inputArray[1][0] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[1][2] === "O")
  ) {
    result = 2;
    return result;
  }
  if (
    (inputArray[2][0] === "X" &&
      inputArray[2][1] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[2][0] === "O" &&
      inputArray[2][1] === "O" &&
      inputArray[2][2] === "O")
  ) {
    result = 3;
    return result;
  }
  if (
    (inputArray[0][0] === "X" &&
      inputArray[1][0] === "X" &&
      inputArray[2][0] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[1][0] === "O" &&
      inputArray[2][0] === "O")
  ) {
    result = 4;
    return result;
  }
  if (
    (inputArray[0][1] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][1] === "X") ||
    (inputArray[0][1] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][1] === "O")
  ) {
    result = 5;
    return result;
  }
  if (
    (inputArray[0][2] === "X" &&
      inputArray[1][2] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[0][2] === "O" &&
      inputArray[1][2] === "O" &&
      inputArray[2][2] === "O")
  ) {
    result = 6;
    return result;
  }
  if (
    (inputArray[0][0] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][2] === "O")
  ) {
    result = 7;
    return result;
  }
  if (
    (inputArray[0][2] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][0] === "X") ||
    (inputArray[0][2] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][0] === "O")
  ) {
    result = 8;
    return result;
  }
  return result;
}
