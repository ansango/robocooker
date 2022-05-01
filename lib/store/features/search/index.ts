import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";
import { initialState } from "./state";
import { basicSearch, getLastRecipes } from "./thunks";
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(basicSearch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(basicSearch.fulfilled, (state, action) => {
        state.status = "idle";
        state.results = action.payload;
      })
      .addCase(basicSearch.rejected, (state, action) => {
        state.status = "failed";
      });
    builder
      .addCase(getLastRecipes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getLastRecipes.fulfilled, (state, action) => {
        state.status = "idle";
        state.defaultRecipes = action.payload;
      })
      .addCase(getLastRecipes.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { setQuery } = searchSlice.actions;
export const selectSearchResults = (state: AppState) => state.search.results;
export const selectSearchQuery = (state: AppState) => state.search.query;
export const selectSearchStatus = (state: AppState) => state.search.status;
export const selectSearchDefaultRecipes = (state: AppState) =>
  state.search.defaultRecipes;

export default searchSlice.reducer;
