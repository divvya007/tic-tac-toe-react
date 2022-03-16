import reducer, { initialState, playerMove, resetButton } from "./gameReducer";
import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";

describe("testing game reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      gridFrame: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      nextMove: "X",
      gameState: "inProgress",
      strikeType: null,
    });
  });
  it("should make move X", () => {
    expect(reducer(initialState, playerMove({ row: 0, column: 0 }))).toEqual({
      gridFrame: [
        ["X", null, null],
        [null, null, null],
        [null, null, null],
      ],
      nextMove: "O",
      gameState: "inProgress",
      strikeType: null,
    });
  });
  it("should make move O", () => {
    expect(
      reducer(
        {
          gridFrame: [
            ["X", null, null],
            [null, null, null],
            [null, null, null],
          ],
          nextMove: "O",
          gameState: "inProgress",
          strikeType: null,
        },
        playerMove({ row: 0, column: 1 })
      )
    ).toEqual({
      gridFrame: [
        ["X", "O", null],
        [null, null, null],
        [null, null, null],
      ],
      nextMove: "X",
      gameState: "inProgress",
      strikeType: null,
    });
  });

  it("should make the game state won", () => {
    expect(
      reducer(
        {
          gridFrame: [
            ["X", "O", null],
            [null, "X", "O"],
            [null, null, null],
          ],
          nextMove: "X",
          gameState: "inProgress",
          strikeType: null,
        },
        playerMove({ row: 2, column: 2 })
      )
    ).toEqual({
      gridFrame: [
        ["X", "O", null],
        [null, "X", "O"],
        [null, null, "X"],
      ],
      nextMove: "O",
      gameState: "won",
      strikeType: 7,
    });
  });
  it("should return draw game", () => {
    expect(
      reducer(
        {
          gridFrame: [
            ["X", "X", "O"],
            ["O", "O", "X"],
            ["X", "O", null],
          ],
          nextMove: "X",
          gameState: "inProgress",
          strikeType: null,
        },
        playerMove({ row: 2, column: 2 })
      )
    ).toEqual({
      gridFrame: [
        ["X", "X", "O"],
        ["O", "O", "X"],
        ["X", "O", "X"],
      ],
      nextMove: "O",
      gameState: "draw",
      strikeType: null,
    });
  });

  it("should reset the game", () => {
    expect(
      reducer(
        {
          gridFrame: [
            ["X", "X", "O"],
            ["O", "O", "X"],
            ["X", "O", "X"],
          ],
          nextMove: "O",
          gameState: "draw",
          strikeType: null,
        },
        resetButton(initialState)
      )
    ).toEqual({
      gridFrame: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
      nextMove: "X",
      gameState: "inProgress",
      strikeType: null,
    });
  });
});
