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
          maxResults: 2,
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
