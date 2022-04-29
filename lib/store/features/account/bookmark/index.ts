import { AppState } from "../../../";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
  getBookmark,
  saveRecipeBookmark,
  addCollection,
  getBookmarkRecipes,
  getBookmarkCollections,
} from "./thunks";
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookmark.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBookmark.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getBookmark.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(getBookmarkRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBookmarkRecipes.fulfilled, (state, action) => {
        state.status = "idle";
        state.recipes = action.payload;
      })
      .addCase(getBookmarkRecipes.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(getBookmarkCollections.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBookmarkCollections.fulfilled, (state, action) => {
        state.status = "idle";
        state.collections = action.payload;
      })
      .addCase(getBookmarkCollections.rejected, (state) => {
        state.status = "failed";
      });

    builder
      .addCase(saveRecipeBookmark.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveRecipeBookmark.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(saveRecipeBookmark.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(addCollection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCollection.fulfilled, (state, action) => {
        state.status = "idle";
        state.collections && state.collections.push(action.payload);
      })
      .addCase(addCollection.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const selectBookmark = (state: AppState) => state.bookmark.value;
export const selectBookmarkId = (state: AppState) =>
  state.bookmark.value && state.bookmark.value._id;
export const selectBookmarkRecipes = (state: AppState) =>
  state.bookmark.recipes && state.bookmark.recipes;
export const selectBookmarkTotalRecipes = (state: AppState) =>
  state.bookmark.value && state.bookmark.value.recipes.length;
export const selectBookmarkStatus = (state: AppState) => state.bookmark.status;
export const selectCollections = (state: AppState) =>
  state.bookmark.collections && state.bookmark.collections;

export default bookmarkSlice.reducer;
