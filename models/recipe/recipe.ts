import { Blender } from "models/blender";

type Recipe = {
  _id: RecipeId;
  name: Name;
  description: Content;
  img: Url;
  categories: CategoryName[];
  servings: Servings;
  duration: Duration;
  blender: BlenderName;
  ingredients: Ingredient[];
  steps: Step[];
  likes: UserId[];
  comments: CommentId[];
  created: Date;
  author: UserId;
};

type Step = {
  name: Name;
  position: Position;
};

type Ingredient = {
  name: Name;
  unit: Unit;
  measure: Measure;
};

export { type Recipe };
