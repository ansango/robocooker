import {
  findCollectedRecipesByIds,
  findCollectionById,
} from "@/api/db/collection";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Collection } from "@/models/user/bookmark";

import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.query.collectionId)
    return res.status(400).json({ error: "CollectionId is required" });
  const collection = (await findCollectionById(
    req.db,
    req.query.collectionId
  )) as Collection;

  if (!collection)
    return res.status(404).json({ error: "Collection not found" });
  const recipes = await findCollectedRecipesByIds(req.db, collection.recipes);
  if (!recipes) return res.status(404).json({ error: "Recipes not found" });

  return res.json({ collection: { ...collection, recipes: [...recipes] } });
});

export default handler;
