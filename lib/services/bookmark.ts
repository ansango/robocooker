import { Bookmark, Collection } from "@/models/user/bookmark";
import fetcher from "@/utils/fetcher";

export const onGetBookmarkService = async () => {
  const response = await fetcher("/api/account/bookmark/");
  return response.bookmark;
};

export const onSaveRecipeBookmarkService = async (
  bookmark: Bookmark
): Promise<Bookmark> => {
  try {
    const response = await fetcher("/api/account/bookmark/recipes", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookmark,
      }),
    });
    return response.bookmark;
  } catch (error) {
    throw error;
  }
};

export const onAddCollectionService = async ({
  bookmarkId,
  collection,
}: {
  bookmarkId: BookmarkId;
  collection: Collection;
}): Promise<Collection> => {
  try {
    const response = await fetcher("/api/account/bookmark/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookmarkId,
        collection,
      }),
    });
    return response.collection;
  } catch (error) {
    throw error;
  }
};
