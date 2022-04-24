import { Comment, CommentDAO } from "@/models/recipe/comment";
import fetcher from "@/utils/fetcher";

export const onGetCommentsService = async (
  recipeId: RecipeId
): Promise<Comment[]> => {
  try {
    const response = await fetcher(`/api/comments/${recipeId}`, {
      method: "GET",
    });
    return response.comments;
  } catch (error) {
    throw error;
  }
};

export const onPostCommentService = async (
  comment: CommentDAO
): Promise<Comment> => {
  try {
    const response = await fetcher(`/api/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });
    return response.comment;
  } catch (error) {
    throw error;
  }
};
