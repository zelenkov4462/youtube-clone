import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../ReduxToolkit/Slices/videoSlice";
import userSlice from "../ReduxToolkit/Slices/userSlice";

export const store = configureStore({
  reducer: {
    videos: videoSlice,
    user: userSlice,
  },
});
