import { Category } from "lib/models/recipe/category";
import fetcher from "../utils/fetcher";

const onGetAllCategoriesService = async (): Promise<Category[]> => {
  try {
    const response = await fetcher("/api/categories/all", {
      method: "GET",
    });
    return response.categories;
  } catch (err) {
    throw err;
  }
};

export { onGetAllCategoriesService };
