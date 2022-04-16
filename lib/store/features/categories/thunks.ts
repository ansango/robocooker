import { onGetAllCategoriesService } from "@/services/categories";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = onGetAllCategoriesService();
    return response;
  }
);
