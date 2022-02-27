export default function isGameDraw(inputArray) {
  let gameDraw = false;
  let draw = inputArray.every((currentArray) => {
    return currentArray.every((arrayElement) => {
      return arrayElement !== null;
    });
  });
  if (draw === true) {
    return (gameDraw = true);
  }
  return gameDraw;
}
