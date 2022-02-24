import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  gridFrame: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

const slice = createSlice({
  name: "move",
  initialState,
  reducers: {
    playerMove: (state, action) => {
      console.log(action.payload);
      state.gridFrame = state.gridFrame.map((item, index) => {});
    },
  },
});

export const { playerMove } = slice.actions;

export default slice.reducer;
