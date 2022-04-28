import { Recipe } from "lib/models/recipe/recipe";

type Bookmark = {
  _id: BookmarkId;
  accountId: AccountId;
  recipes: Recipe[];
  collections: Collection[];
};

type Collection = {
  position: string;
  name: Name;
  description: Content;
  recipes: Recipe[];
  created: Date;
};

export { type Collection, type Bookmark };
