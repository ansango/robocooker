import { insertRecipe } from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database);

handler.post(...auth, async (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const recipe = await insertRecipe(req.db, req.body);
  res.status(200).json({ recipe });
});

export default handler;
