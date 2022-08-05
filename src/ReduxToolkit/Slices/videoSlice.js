import { createSlice } from "@reduxjs/toolkit";
import { getVideosAsync } from "../async/getVideosAsync";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getVideosAsync.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [getVideosAsync.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.videos = action.payload;
    },
    [getVideosAsync.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default videoSlice.reducer;
export const {} = videoSlice.actions;
