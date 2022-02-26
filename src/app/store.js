import { configureStore } from "@reduxjs/toolkit";
// TODO: Remove the commented line
// import counterReducer from '../features/counter/counterSlice';
import sliceReducer from "../features/counter/Slice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // TODO: Rename slice reducer to gameReducer
    grid: sliceReducer,
  },
});
