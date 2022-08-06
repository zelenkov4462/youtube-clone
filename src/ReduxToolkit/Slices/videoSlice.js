import { createSlice } from "@reduxjs/toolkit";
// import { getVideosAsync } from "../async/getVideosAsync";
// import { searchVideosAsync } from "../async/searchVideoAsync";

import { createAsyncThunk } from "@reduxjs/toolkit";

import URL from "../../api/URL";

import API_KEY from "../../api/api_key";

export const getVideosAsync = createAsyncThunk(
  "videos/getVideos",
  async function (_, { rejectWithValue }) {
    try {
      const {
        data: { items: videos },
      } = await URL.get("search", {
        params: {
          part: "snippet",
          maxResults: 3,
          key: API_KEY,
          q: "nature",
        },
      });
      return videos;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const searchVideosAsync = createAsyncThunk(
  "videos/searchVideos",
  async function (searchQuery, { rejectedWithValue, dispatch }) {
    try {
      const {
        data: { items: videos },
      } = await URL.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: API_KEY,
          q: searchQuery,
        },
      });
      // dispatch(addSearchQuery(searchQuery));
      return videos;
    } catch (e) {
      return rejectedWithValue(e.message);
    }
  }
);

export const getLikesAsync = createAsyncThunk(
  "videos/getLikes",
  async function (videoId, { rejectedWithValue, dispatch }) {
    try {
      const {
        data: { items: statistics },
      } = await URL.get(`videos?id=${videoId}&key=${API_KEY}&part=statistics`);

      dispatch(addStatisticsVideo(statistics[0].statistics));
    } catch (e) {
      return rejectedWithValue(e.message);
    }
  }
);

const setPending = (state, action) => {
  state.status = "loading";
  state.error = null;
};
const setFulfilled = (state, action) => {
  state.status = "resolved";
  state.videos = action.payload;
};
const setRejected = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videos: [],
    selectedVideo: "",
    statistics: null,
    status: null,
    error: null,
  },
  reducers: {
    addSelectedVideo(state, action) {
      state.selectedVideo = action.payload;
    },
    addStatisticsVideo(state, action) {
      state.statistics = action.payload;
    },
  },
  extraReducers: {
    [getVideosAsync.pending]: setPending,
    [getVideosAsync.fulfilled]: setFulfilled,
    [getVideosAsync.rejected]: setRejected,

    [searchVideosAsync.pending]: setPending,
    [searchVideosAsync.fulfilled]: setFulfilled,
    [searchVideosAsync.rejected]: setRejected,
  },
});

export default videoSlice.reducer;
export const { addSelectedVideo, addStatisticsVideo } = videoSlice.actions;
