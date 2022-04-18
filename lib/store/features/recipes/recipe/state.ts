import { RecipeDTO } from "@/models/recipe/recipe";

export interface RecipeState {
  status: "idle" | "loading" | "failed";
  value: RecipeDTO | null;
}

export const initialState: RecipeState = {
  status: "idle",
  value: null,
};
