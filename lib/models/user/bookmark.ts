import { Recipe } from "lib/models/recipe/recipe";

type Bookmark = {
  _id: BookmarkId;
  accountId: AccountId;
  recipes: RecipeId[];
  collections: CollectionId[];
};

type BookmarkPopulated = {
  recipes: Recipe[];
} & Bookmark;

type Collection = {
  _id: CollectionId;
  name: Name;
  description: Content;
  recipes: Recipe[];
  created: Date;
};

export { type Collection, type Bookmark, type BookmarkPopulated };
