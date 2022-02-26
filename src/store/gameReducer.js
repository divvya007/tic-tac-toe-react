import { createSlice } from "@reduxjs/toolkit";

import getStrikeType from "./../utils/getStrikeType";

const initialState = {
  gridFrame: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  nextMove: "X",
  /* 
  TODO: 
    1. "playerName" or the "winnerName" can be derived from next move, so no 
       need to save it separately
    2. "winner" name can be misleading 
   
  */
  winner: false,
  strikeType: null,
  playerName: null,

  // gameState: inProgress | won | draw
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
  state.winner = state.strikeType !== null ? !state.winner : state.winner;
  state.playerName =
    state.winner === true && state.nextMove === "X" ? "O" : "X";
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
