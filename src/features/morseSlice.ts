import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface SliceState {
  morse: string;
  text: string;
}

const storageKey = "text-to-morse";

const loadFromLocalStorage = (): SliceState => {
  const fallback: SliceState = {
    morse: "",
    text: "",
  };
  const item = window.localStorage.getItem(storageKey);

  try {
    return JSON.parse(item ?? "null") ?? fallback;
  } catch (e) {
    return fallback;
  }
};

const storeInLocalStorage = (state: SliceState) => {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
};

export const Slice = createSlice({
  name: "morse",
  initialState: loadFromLocalStorage(),
  reducers: {
    changeMorse: (state, action) => {
      state.morse = action.payload;
      storeInLocalStorage(state);
    },
    changeText: (state, action) => {
      state.text = action.payload;
      storeInLocalStorage(state);
    },
  },
});

export const selectMorse = (state: RootState) => state.morse.morse;
export const selectText = (state: RootState) => state.morse.text;
export const { changeMorse, changeText } = Slice.actions;
export default Slice.reducer;
