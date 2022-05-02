import { RecipeDTO } from "@/models/recipe/recipe";
import { Category } from "lib/models/recipe/category";
import fetcher from "../utils/fetcher";

export const onGetAllCategoriesService = async (): Promise<Category[]> => {
  try {
    const response = await fetcher("/api/categories/all", {
      method: "GET",
    });
    return response.categories;
  } catch (err) {
    throw err;
  }
};

export const onGetLastRecipesByCategoryService = async (
  category: CategoryName
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/categories/last`, {
      method: "GET",
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
