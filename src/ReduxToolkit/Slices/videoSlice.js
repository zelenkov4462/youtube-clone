import { createSlice } from "@reduxjs/toolkit";
// import { getVideosAsync } from "../async/getVideosAsync";
// import { searchVideosAsync } from "../async/searchVideoAsync";

import { createAsyncThunk } from "@reduxjs/toolkit";

import URL from "../../api/URL";

import API_KEY from "../../api/api_key";
import { Axios as axios } from "axios";

export const getVideosAsync = createAsyncThunk(
  "videos/getVideos",
  async function (_, { rejectWithValue, dispatch }) {
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
      } = await URL.get(`videos?part=statistics&id=${videoId}&key=${API_KEY}`);

      // dispatch(addStatisticsVideo(statistics[0].statistics));
      return statistics;
    } catch (e) {
      return rejectedWithValue(e.message);
    }
  }
);

export const getRatingAsync = createAsyncThunk(
  "videos/getRating",
  async function (videoId, { rejectWithValue }) {
    try {
      const {
        data: { items: rating },
      } = await URL.get(`videos/getRating?id=${videoId}=${API_KEY}`);

      return rating;
    } catch (e) {
      return rejectWithValue(e.message);
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
    mainVideo: [],
    selectedVideo: "",
    statistics: [],
    rating: [],
    status: null,
    error: null,
  },
  reducers: {
    getMainVideo(state, action) {
      state.mainVideo = action.payload;
    },
    addSelectedVideo(state, action) {
      state.selectedVideo = action.payload;
    },
  },
  extraReducers: {
    [getVideosAsync.pending]: setPending,
    [getVideosAsync.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.videos = action.payload;
      state.mainVideo = [action.payload[0]];
    },
    [getVideosAsync.rejected]: setRejected,

    [searchVideosAsync.pending]: setPending,
    [searchVideosAsync.fulfilled]: setFulfilled,
    [searchVideosAsync.rejected]: setRejected,

    [getLikesAsync.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.statistics = action.payload[0];
    },

    [getRatingAsync.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.rating = action.payload[0];
    },
  },
});

export default videoSlice.reducer;
export const { addSelectedVideo, getMainVideo } = videoSlice.actions;
