import { Category } from "models/recipe/category";
import fetcher from "../fetcher";

const onGetAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetcher("/api/categories/all", {
      method: "GET",
    });
    return response.categories;
  } catch (err) {
    throw err;
  }
};

export { onGetAllCategories };
