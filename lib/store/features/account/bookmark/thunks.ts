import { Bookmark, Collection } from "@/models/user/bookmark";
import {
  onGetBookmarkService,
  onSaveRecipeBookmarkService,
  onAddCollectionService,
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

export const addCollection = createAsyncThunk(
  "bookmark/addCollection",
  async ({
    bookmarkId,
    collection,
  }: {
    bookmarkId: BookmarkId;
    collection: Collection;
  }) => {
    const response = onAddCollectionService({ bookmarkId, collection });
    return response;
  }
);
