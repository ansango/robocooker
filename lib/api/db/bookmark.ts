import { Bookmark } from "@/models/user/bookmark";
import { Db, ObjectId } from "mongodb";

export const findBookmarkById = async (
  db: Db,
  bookmarkId: BookmarkId
): Promise<Bookmark> => {
  const bookmark = (await db
    .collection("bookmarks")
    .findOne({ _id: new ObjectId(bookmarkId) })) as Bookmark;
  return bookmark;
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
