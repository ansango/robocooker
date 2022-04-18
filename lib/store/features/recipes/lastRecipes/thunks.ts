import { onGetLastRecipesService } from "@/services/recipes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLastRecipes = createAsyncThunk(
  "lastRecipes/getLastRecipes",
  async () => {
    const response = await onGetLastRecipesService(9);
    return response;
  }
);
