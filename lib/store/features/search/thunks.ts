import { onGetLastRecipesService } from "@/services/recipes";
import { onBasicSearchService } from "@/services/search";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const basicSearch = createAsyncThunk(
  "search/basic",
  async (query: string) => {
    const response = await onBasicSearchService(query);
    return response;
  }
);

export const getLastRecipes = createAsyncThunk(
  "search/last",
  async (limit: number) => {
    const response = onGetLastRecipesService(limit);
    return response;
  }
);
