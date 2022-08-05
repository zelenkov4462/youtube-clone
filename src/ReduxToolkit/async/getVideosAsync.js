import { createAsyncThunk } from "@reduxjs/toolkit";

import URL from "../../api/URL";

import API_KEY from "../../api/api_key";

export const getVideosAsync = createAsyncThunk(
  "videos/getVideos",
  async function (q, { rejectWithValue }) {
    try {
      const {
        data: { items: videos },
      } = await URL.get("search", {
        params: {
          part: "snippet",
          maxResults: 1,
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
