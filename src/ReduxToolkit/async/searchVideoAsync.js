import { createAsyncThunk } from "@reduxjs/toolkit";

import URL from "../../api/URL";

import API_KEY from "../../api/api_key";
import { addSearchQuery } from "../Slices/videoSlice";

export const searchVideosAsync = createAsyncThunk(
  "videos/searchVideos",
  async function (searchQuery, { rejectedWithValue, dispatch }) {
    try {
      const {
        data: { items: videos },
      } = await URL.get("search", {
        params: {
          part: "snippet",
          maxResults: 2,
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
