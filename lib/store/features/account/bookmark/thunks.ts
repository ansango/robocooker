import { Bookmark } from "@/models/user/bookmark";
import {
  onGetBookmarkService,
  onSaveRecipeBookmarkService,
} from "@/services/bookmark";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBookmark = createAsyncThunk(
  "bookmark/getBookmark",
  async () => {
    const response = onGetBookmarkService();
    return response;
  }
);

export const saveRecipeBookmark = createAsyncThunk(
  "bookmark/saveBookmark",
  async (bookmark: Bookmark) => {
    const response = onSaveRecipeBookmarkService(bookmark);
    return response;
  }
);
