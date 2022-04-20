import { RecipeDAO } from "@/models/recipe/recipe";
import {
  onGetMyRecipesService,
  onPostRecipeService,
  onUpdateImageRecipeService,
} from "@/services/recipes";
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

export const addMyRecipe = createAsyncThunk(
  "myRecipes/addMyRecipe",
  async ({ recipe, file }: { recipe: RecipeDAO; file: FormData }) => {
    const { _id } = await onPostRecipeService(recipe);
    const response = await onUpdateImageRecipeService(_id, file);
    return response;
  }
);
