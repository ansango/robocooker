import { Comment } from "@/models/recipe/comment";

export interface RecipeState {
  status: "idle" | "loading" | "failed";
  value: Comment[] | null;
}

export const initialState: RecipeState = {
  status: "idle",
  value: null,
};
