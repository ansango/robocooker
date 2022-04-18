import { RecipeDTO } from "@/models/recipe/recipe";

export interface MyRecipesState {
  status: "idle" | "loading" | "failed";
  value: RecipeDTO[] | null;
}

export const initialState: MyRecipesState = {
  status: "idle",
  value: null,
};
