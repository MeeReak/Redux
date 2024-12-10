// redux/feature/form/slice.ts

import { createSlice } from "@reduxjs/toolkit";

interface DialogState {
  isOpen: boolean;
}

const initialState: DialogState = {
  isOpen: false,
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = dialogSlice.actions;

export default dialogSlice.reducer;
