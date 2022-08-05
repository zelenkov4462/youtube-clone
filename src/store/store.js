import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../ReduxToolkit/Slices/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videoSlice,
  },
});
