import { RecipeDAO, RecipeDTO } from "@/models/recipe/recipe";
import fetcher from "@/utils/fetcher";

export const onGetLastRecipesService = async (
  limit: number
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/recipes/last?limit=${limit}`, {
      method: "GET",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const onGetMyRecipesService = async (): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/recipes/user-recipes`, {
      method: "GET",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const onGetRecipeByIdService = async (
  id: string
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes/${id}`, {
      method: "GET",
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onPostRecipeService = async (
  recipe: RecipeDAO
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipe }),
    });

    return response.recipe;
  } catch (error) {
    throw error;
  }
};
