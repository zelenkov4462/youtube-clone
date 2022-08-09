import { createSlice } from "@reduxjs/toolkit";
import {
  getLikesAsync,
  getRatingAsync,
  getVideosAsync,
  searchVideosAsync,
} from "./videoSlice";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    user: null,
  },
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {},
});

export default videoSlice.reducer;
export const { getUser } = videoSlice.actions;
