import { Bookmark } from "@/models/user/bookmark";
import { Db, ObjectId } from "mongodb";

export const findBookmarkById = async (
  db: Db,
  bookmarkId: BookmarkId
): Promise<Bookmark> => {
  const bookmark = await db
    .collection("bookmarks")
    .findOne({ _id: new ObjectId(bookmarkId) });
  return bookmark as Bookmark;
};

export const findBookmarkByIdPopulated = async (
  db: Db,
  bookmarkId: BookmarkId
): Promise<any> => {
  const bookmark = (await db
    .collection("bookmarks")
    .findOne({ _id: new ObjectId(bookmarkId) })) as Bookmark;
  if (!bookmark) return null;
  const ids = bookmark.recipes.map((id) => new ObjectId(id));
  const recipes = await db
    .collection("recipes")
    .find({ _id: { $in: ids } })
    .toArray();
  const data = {
    ...bookmark,
    recipes,
  };
  return data;
};

export const updateRecipesBookmark = async (
  db: Db,
  bookmarkId: BookmarkId,
  recipes: RecipeId[]
): Promise<Bookmark> => {
  const bookmark = await db
    .collection("bookmarks")
    .findOneAndUpdate({ _id: new ObjectId(bookmarkId) }, { $set: { recipes } });
  return bookmark.value as Bookmark;
};
