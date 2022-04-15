import { Recipe } from "models/recipe/recipe";

type Collection = {
  _id: CollectionId;
  name: Name;
  recipes: Recipe[];
  userId: UserId;
  description: Content;
  created: Date;
};

export { type Collection };
