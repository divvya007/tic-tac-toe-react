import { createSlice } from "@reduxjs/toolkit";
// import counterSlice from "./counterSlice";
const initialState = {
  gridFrame: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  nextMove: "X",
  winner: false,
};

const slice = createSlice({
  name: "move",
  initialState,
  reducers: {
    playerMove: (state, action) => {
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
    },
  },
});

export const { playerMove } = slice.actions;

export default slice.reducer;
