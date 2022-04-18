import { onGetLastRecipesService,onGetMyRecipesService } from "@/services/recipes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyRecipes = createAsyncThunk(
  "myRecipes/getMyRecipes",
  async () => {
    const response = await onGetMyRecipesService();
    return response;
  }
);
