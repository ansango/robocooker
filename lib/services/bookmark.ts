import { Bookmark } from "@/models/user/bookmark";
import fetcher from "@/utils/fetcher";

export const onGetBookmarkService = async () => {
  const response = await fetcher("/api/account/bookmark");
  return response.bookmark;
};

export const onSaveRecipeBookmarkService = async (bookmark: Bookmark) => {
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
  } catch (error) {}
};
