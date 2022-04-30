import { AppState } from "../../../";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { getCollection, deleteCollection } from "./thunks";
import toast from "react-hot-toast";

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCollection.pending, (state) => {
        state.status = "loading";
        state.value = null;
      })
      .addCase(getCollection.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getCollection.rejected, (state) => {
        state.status = "failed";
        state.value = null;
      });
    builder.addCase(deleteCollection.pending, (state) => {
      state.status = "loading";
      state.onDeleteCollection = true;
    });
    builder.addCase(deleteCollection.fulfilled, (state) => {
      state.status = "idle";
      state.onDeleteCollection = false;
      toast.success("Colección eliminada");
    });
    builder.addCase(deleteCollection.rejected, (state) => {
      state.status = "failed";
      state.onDeleteCollection = false;
      toast.error("Error al eliminar la colección");
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
