import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../..";
import { initialState } from "./state";
import { getRecipe } from "./thunk";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    likeRecipe: (state, action) => {
      state.likes = state.likes ? state.likes + 1 : 1;
    },
    unlikeRecipe: (state, action) => {
      state.likes = state.likes && state.likes > 0 ? state.likes - 1 : 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.likes = action.payload.likes.length;
      })
      .addCase(getRecipe.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { likeRecipe, unlikeRecipe } = recipeSlice.actions;

export const selectRecipe = (state: AppState) => state.recipe.value;
export const selectRecipeAccountId = (state: AppState) =>
  state.recipe.value && state.recipe.value.accountId;
export const selectRecipeStatus = (state: AppState) => state.recipe.status;
export default recipeSlice.reducer;
