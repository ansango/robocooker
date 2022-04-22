import { RecipeDTO } from "@/models/recipe/recipe";

export interface RecipeState {
  status: "idle" | "loading" | "failed";
  value: RecipeDTO | null;
  likes: number | null;
}

export const initialState: RecipeState = {
  status: "idle",
  value: null,
  likes: null,
};
