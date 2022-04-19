import { onGetMyRecipesService } from "@/services/recipes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyRecipes = createAsyncThunk(
  "myRecipes/getMyRecipes",
  async () => {
    const response = await onGetMyRecipesService();
    return response;
  }
);

export const removeMyRecipes = createAsyncThunk(
  "myRecipes/removeMyRecipes",
  async (timing?: number) => {
    return new Promise<void>((resolve) =>
      setTimeout(() => resolve(), timing ?? 2000)
    );
  }
);