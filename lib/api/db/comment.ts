import { Comment, CommentDAO } from "@/models/recipe/comment";
import { Db, ObjectId } from "mongodb";

export const findAllCommentsByRecipeId = (db: Db, recipeId: RecipeId) => {
  return db
    .collection("comments")
    .find({ recipeId })
    .toArray()
    .then((comments) => comments || []);
};

export const insertComment = async (
  db: Db,
  comment: CommentDAO
): Promise<Comment> => {
  const newComment: Comment = { ...comment, _id: new ObjectId() };
  await db.collection("comments").insertOne({ ...newComment });
  return newComment;
};
