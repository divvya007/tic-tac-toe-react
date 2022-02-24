import { createSlice } from "@reduxjs/toolkit";
// import counterSlice from "./counterSlice";
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
      let { row, column } = action.payload;
      state.gridFrame = state.gridFrame.map((item, index) => {
        if (index === row) {
          console.log("item", item);
          return item.map((itm, i) => {
            console.log("itm", itm);
            if (i === column) {
              if (itm === null) {
                return (itm = "X");
              }
            }
            return itm;
          });
        }
        return item;
      });
    },
  },
});

export const { playerMove } = slice.actions;

export default slice.reducer;
