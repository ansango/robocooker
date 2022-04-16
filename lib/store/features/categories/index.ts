import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";
import { initialState } from "./state";
import { getCategories } from "./thunks";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCategories = (state: AppState) => state.categories.value;
export const selectCategoriesStatus = (state: AppState) =>
  state.categories.status;
export default categoriesSlice.reducer;
