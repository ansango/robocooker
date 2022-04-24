import nc from "next-connect";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { findAllCommentsByRecipeId } from "@/api/db/comment";
import { Comment } from "@/models/recipe/comment";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  
  if (!req.query.recipeId) {
    return res.status(400).json({ error: "recipeId is required" });
  }

  const recipeId = req.query.recipeId;
  try {
    const comments = (await findAllCommentsByRecipeId(
      req.db,
      recipeId
    )) as Comment[];
    return res.json({ comments });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
