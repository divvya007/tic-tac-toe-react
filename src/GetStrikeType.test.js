import getStrikeType from "./utils/getStrikeType";

test("should return 1 for 00,01,02", () => {
  let mockGridX = [
    ["X", "X", "X"],
    ["O", "O", null],
    [null, null, null],
  ];
  let mockGridO = [
    ["O", "O", "O"],
    ["X", "X", null],
    [null, null, null],
  ];

  expect(getStrikeType(mockGridX)).toBe(1);
  expect(getStrikeType(mockGridO)).toBe(1);
});

test("should return 2 for 10,11,12", () => {
  let mockGridX = [
    ["O", "O", null],
    ["X", "X", "X"],
    [null, null, null],
  ];

  let mockGridO = [
    ["X", "X", null],
    ["O", "O", "O"],
    [null, null, null],
  ];

  expect(getStrikeType(mockGridX)).toBe(2);
  expect(getStrikeType(mockGridO)).toBe(2);
});

test("should return 3 for 20,21,22", () => {
  let mockGridX = [
    ["O", "O", null],
    [null, null, null],
    ["X", "X", "X"],
  ];

  let mockGridO = [
    ["X", "X", null],
    [null, null, null],
    ["O", "O", "O"],
  ];
  expect(getStrikeType(mockGridX)).toBe(3);
  expect(getStrikeType(mockGridO)).toBe(3);
});

test("should return 4 for 00,10,20", () => {
  let mockGridX = [
    ["X", "O", null],
    ["X", null, null],
    ["X", "O", null],
  ];

  let mockGridO = [
    ["O", "X", null],
    ["O", null, null],
    ["O", "X", null],
  ];
  expect(getStrikeType(mockGridX)).toBe(4);
  expect(getStrikeType(mockGridO)).toBe(4);
});

test("should return 5 for 01,11,21", () => {
  let mockGridX = [
    ["O", "X", null],
    ["O", "X", null],
    [null, "X", null],
  ];

  let mockGridO = [
    ["O", "X", null],
    ["O", "X", null],
    [null, "X", null],
  ];
  expect(getStrikeType(mockGridX)).toBe(5);
  expect(getStrikeType(mockGridO)).toBe(5);
});

test("should return 6 for 02,12,22", () => {
  let mockGridX = [
    [null, "O", "X"],
    [null, "O", "X"],
    [null, null, "X"],
  ];

  let mockGridO = [
    [null, "X", "O"],
    [null, "X", "O"],
    [null, null, "O"],
  ];
  expect(getStrikeType(mockGridX)).toBe(6);
  expect(getStrikeType(mockGridO)).toBe(6);
});

test("should return 7 for 00,11,22", () => {
  let mockGridX = [
    ["X", null, "O"],
    [null, "X", "O"],
    [null, null, "X"],
  ];

  let mockGridO = [
    ["O", null, "X"],
    [null, "O", "X"],
    [null, null, "O"],
  ];
  expect(getStrikeType(mockGridX)).toBe(7);
  expect(getStrikeType(mockGridO)).toBe(7);
});

test("should return 8 for 12,11,20", () => {
  let mockGridX = [
    ["O", null, "X"],
    ["O", "X", null],
    ["X", null, null],
  ];

  let mockGridO = [
    ["X", null, "O"],
    ["X", "O", null],
    ["O", null, null],
  ];
  expect(getStrikeType(mockGridX)).toBe(8);
  expect(getStrikeType(mockGridO)).toBe(8);
});
