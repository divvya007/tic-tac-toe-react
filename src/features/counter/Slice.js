import { createSlice } from "@reduxjs/toolkit";

import Winner from "./winner";

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
    3. Document the strike type
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
  state.strikeType = Winner(state.gridFrame);
  state.winner = state.strikeType !== null ? !state.winner : state.winner;
  state.playerName =
    state.winner === true && state.nextMove === "X" ? "O" : "X";
}

const handleResetGame = () => {
  return initialState;
  // state.gridFrame = state.gridFrame.map((item) => {
  //   if (item) {
  //     return item.map((value) => {
  //       value = null;
  //       return value;
  //     });
  //   }
  //   return item;
  // });
  // state.nextMove = "X";
  // state.playerName = null;
  // state.strikeType = null;
  // state.winner = false;
}

const slice = createSlice({
  name: "move",
  initialState,
  reducers: {
    playerMove: handlePlayerMove,
    resetButton: handleResetGame,
  }
});

export const { playerMove, resetButton } = slice.actions;

export default slice.reducer;
