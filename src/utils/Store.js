import { configureStore } from "@reduxjs/toolkit";
import navslice from "./navslice";
import searchSlice from "./SearchSlice";
import chatslice from "./ChatSlice";

const store = configureStore({
  reducer: {
    nav: navslice,
    search: searchSlice,
    chat: chatslice,
  },
});
export default store;
