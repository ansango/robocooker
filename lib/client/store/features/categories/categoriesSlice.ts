import { onGetAllCategories } from "@/lib-client/services/categories";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "models/recipe/category";
import { AppState } from "../..";

export interface CategoriesState {
  value: Category[] | null;
  status: "idle" | "loading" | "failed";
}

const initialState: CategoriesState = {
  value: null,
  status: "idle",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = onGetAllCategories();
    return response;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCategories = (state: AppState) => state.categories.value;
export const selectCategoriesStatus = (state: AppState) =>
  state.categories.status;
export default categoriesSlice.reducer;
