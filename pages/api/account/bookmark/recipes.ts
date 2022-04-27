import { updatePreferencesAccountById } from "@/api/db/account";
import { updateRecipesBookmark } from "@/api/db/bookmark";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Bookmark } from "@/models/user/bookmark";

import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.patch(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.body.bookmark)
    return res.status(404).json({ error: "Bookmark not found" });
  const { _id, recipes } = req.body.bookmark as Bookmark;
  try {
    await updateRecipesBookmark(req.db, _id, recipes);
    return res.json({ bookmark: req.body.bookmark });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
