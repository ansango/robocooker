import { RecipeDTO } from "@/models/recipe/recipe";
import fetcher from "@/utils/fetcher";

export const onBasicSearchService = async (
  query: string,
  filters?: BlenderName[] | CategoryName[]
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/recipes/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, filters }),
    });
    return response.results;
  } catch (error) {
    throw error;
  }
};
