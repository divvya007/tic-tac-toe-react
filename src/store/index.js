import { configureStore } from "@reduxjs/toolkit";
// TODO: Remove the commented line

import gameReducer from "./gameReducer";

export const store = configureStore({
  reducer: {
    grid: gameReducer,
  },
});
