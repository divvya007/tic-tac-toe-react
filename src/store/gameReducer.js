import { createSlice } from "@reduxjs/toolkit";

import getStrikeType from "./../utils/getStrikeType";
import isGameDraw from "../utils/isGameDraw";

const initialState = {
  gridFrame: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  nextMove: "X",
  gameState: "inProgress",
  strikeType: null,
  gameDraw: false,
};

const handlePlayerMove = (state, action) => {
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
  state.gameDraw = isGameDraw(state.gridFrame);

  state.gameState = state.strikeType !== null ? "won" : state.gameState;
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
