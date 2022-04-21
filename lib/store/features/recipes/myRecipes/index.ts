import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../..";
import { initialState } from "./state";
import {
  getMyRecipes,
  removeMyRecipes,
  addMyRecipe,
  updateMyPictureRecipe,
} from "./thunks";
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
    builder
      .addCase(addMyRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMyRecipe.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(addMyRecipe.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updateMyPictureRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateMyPictureRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value =
          state.value &&
          state.value.map((recipe) => {
            if (recipe._id === action.payload._id) {
              return action.payload;
            }
            return recipe;
          });
      })
      .addCase(updateMyPictureRecipe.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectMyRecipes = (state: AppState) => state.myRecipes.value;
export const selectMyRecipesStatus = (state: AppState) =>
  state.myRecipes.status;
export default myRecipesSlice.reducer;
