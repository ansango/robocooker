import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../..";
import { initialState } from "./state";
import { getMyRecipes, removeMyRecipes } from "./thunks";
export const myRecipesSlice = createSlice({
  name: "myRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMyRecipes.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getMyRecipes.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(removeMyRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeMyRecipes.fulfilled, (state) => {
        state.status = "idle";
        state.value = null;
      })
      .addCase(removeMyRecipes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectMyRecipes = (state: AppState) => state.myRecipes.value;
export const selectMyRecipesStatus = (state: AppState) =>
  state.myRecipes.status;
export default myRecipesSlice.reducer;