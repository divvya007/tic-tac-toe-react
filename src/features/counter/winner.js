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
    return (result = 1);
  }
  if (
    (inputArray[1][0] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[1][2] === "X") ||
    (inputArray[1][0] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[1][2] === "O")
  ) {
    return (result = 2);
  }
  if (
    (inputArray[2][0] === "X" &&
      inputArray[2][1] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[2][0] === "O" &&
      inputArray[2][1] === "O" &&
      inputArray[2][2] === "O")
  ) {
    return (result = 3);
  }
  if (
    (inputArray[0][0] === "X" &&
      inputArray[1][0] === "X" &&
      inputArray[2][0] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[1][0] === "O" &&
      inputArray[2][0] === "O")
  ) {
    return (result = 4);
  }
  if (
    (inputArray[0][1] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][1] === "X") ||
    (inputArray[0][1] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][1] === "O")
  ) {
    return (result = 5);
  }
  if (
    (inputArray[0][2] === "X" &&
      inputArray[1][2] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[0][2] === "O" &&
      inputArray[1][2] === "O" &&
      inputArray[2][2] === "O")
  ) {
    return (result = 6);
  }
  if (
    (inputArray[0][0] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][2] === "X") ||
    (inputArray[0][0] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][2] === "O")
  ) {
    return (result = 7);
  }
  if (
    (inputArray[0][2] === "X" &&
      inputArray[1][1] === "X" &&
      inputArray[2][0] === "X") ||
    (inputArray[0][2] === "O" &&
      inputArray[1][1] === "O" &&
      inputArray[2][0] === "O")
  ) {
    return (result = 8);
  }
}
