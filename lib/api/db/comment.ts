import { Db, ObjectId } from "mongodb";

export const findAllCommentsByRecipeId = (db: Db, recipeId: RecipeId) => {
  return db
    .collection("comments")
    .find({ recipeId: new ObjectId(recipeId) })
    .toArray()
    .then((comments) => comments || []);
};
