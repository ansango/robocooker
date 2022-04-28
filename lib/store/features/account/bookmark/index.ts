import { AppState } from "../../../";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { getBookmark, saveRecipeBookmark } from "./thunks";
const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    // TODO : change to thunks
    addCollection: (state, action) => {
      state.value && state.value.collections.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBookmark.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getBookmark.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = action.payload;
    });
    builder.addCase(getBookmark.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(saveRecipeBookmark.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(saveRecipeBookmark.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = action.payload;
    });
    builder.addCase(saveRecipeBookmark.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export const { addCollection } = bookmarkSlice.actions;
export const selectBookmark = (state: AppState) => state.bookmark.value;
export const selectBookmarkRecipes = (state: AppState) =>
  state.bookmark.value && state.bookmark.value.recipes;
export const selectBookmarkStatus = (state: AppState) => state.bookmark.status;
export const selectCollections = (state: AppState) =>
  state.bookmark.value && state.bookmark.value.collections;

export default bookmarkSlice.reducer;
