import { AppState } from "../../../";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { getCollection } from "./thunks";

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCollection.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getCollection.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCollection = (state: AppState) => state.collection.value;
export const selectCollectionId = (state: AppState) =>
  state.collection.value?._id;
export const selectIngredients = (state: AppState) =>
  state.collection.value &&
  state.collection.value.recipes.flatMap((recipe) => recipe.ingredients);
export const selectRecipes = (state: AppState) =>
  state.collection.value && state.collection.value.recipes;
export default collectionSlice.reducer;
