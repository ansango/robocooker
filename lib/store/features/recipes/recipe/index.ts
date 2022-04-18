import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../..";
import { initialState } from "./state";
import { getRecipe } from "./thunk";
export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getRecipe.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const selectRecipe = (state: AppState) => state.recipe.value;
export const selectRecipeStatus = (state: AppState) => state.recipe.status;
export default recipeSlice.reducer;
