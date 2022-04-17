import { RecipeDTO } from "@/models/recipe/recipe";
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
