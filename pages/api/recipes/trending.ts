import { findMostLikedRecipes } from "@/api/db/recipe";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  try {
    const recipes = await findMostLikedRecipes(req.db);
    const a =
      recipes &&
      recipes.map((recipe) => {
        console.log(recipe.likes.length);
      });
    return res.json({ recipes });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
