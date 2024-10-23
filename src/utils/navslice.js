import { createSlice } from "@reduxjs/toolkit";

const navslice = createSlice({
  name: "nav",
  initialState: {
    isNavOpen: false,
  },
  reducers: {
    togggleMenu: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    closeMenu: (state) => {
      state.isNavOpen = false;
    },
  },
});
export const { togggleMenu, closeMenu } = navslice.actions;
export default navslice.reducer;
