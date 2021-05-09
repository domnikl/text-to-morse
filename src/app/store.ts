import { configureStore } from "@reduxjs/toolkit";
import morseReducer from "../features/morseSlice";

export const Store = configureStore({
  reducer: {
    morse: morseReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
