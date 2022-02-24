import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import sliceReducer from "../features/counter/Slice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    grid: sliceReducer,
  },
});
