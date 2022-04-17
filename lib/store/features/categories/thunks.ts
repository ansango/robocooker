import { onGetAllCategoriesService } from "@/services/categories";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const response = onGetAllCategoriesService();
    return response;
  }
);
