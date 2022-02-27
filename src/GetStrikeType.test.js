import getStrikeType from "./utils/getStrikeType";

test("should return 1 for 00,01,02", () => {
  mockGrid = [
    ["X", "X", "X"],
    ["O", "O", null],
    [null, null, null],
  ];
  expect(getStrikeType(1)).toBe(1);
});
