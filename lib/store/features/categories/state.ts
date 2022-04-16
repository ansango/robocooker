import { Category } from "@/models/recipe/category";

export interface CategoriesState {
  value: Category[] | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: CategoriesState = {
  value: null,
  status: "idle",
};
