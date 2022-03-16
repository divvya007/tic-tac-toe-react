import { createSlice } from "@reduxjs/toolkit";

import getStrikeType from "./../utils/getStrikeType";
import isGameDraw from "../utils/isGameDraw";

export const initialState = {
  gridFrame: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  nextMove: "X",
  gameState: "inProgress",
  strikeType: null,
};

const handlePlayerMove = (state, action) => {
  console.log("action.payload:", action.payload);
  let { row, column } = action.payload;
  state.gridFrame = state.gridFrame.map((item, index) => {
    if (index === row) {
      return item.map((value, i) => {
        if (i === column) {
          value = state.nextMove;
          state.nextMove = value === "X" ? "O" : "X";
        }
        return value;
      });
    }
    return item;
  });
  state.strikeType = getStrikeType(state.gridFrame);

  if (state.strikeType !== null) {
    state.gameState = "won";
  }
  if (isGameDraw(state.gridFrame) && state.strikeType === null) {
    state.gameState = "draw";
  }
};

const handleResetGame = () => {
  return initialState;
};

const gameReducer = createSlice({
  name: "move",
  initialState,
  reducers: {
    playerMove: handlePlayerMove,
    resetButton: handleResetGame,
  },
});

export const { playerMove, resetButton } = gameReducer.actions;

export default gameReducer.reducer;
