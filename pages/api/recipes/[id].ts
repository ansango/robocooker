import { findRecipeByIdPopulated, insertRecipe } from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database);

handler.get(async (req, res) => {
  if (!req.query) {
    res.status(400).json({ error: "Bad request" });
    return;
  }
  try {
    const { id } = req.query;
    const recipe = await findRecipeByIdPopulated(req.db, id);
    return res.status(200).json({ recipe });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

export default handler;
