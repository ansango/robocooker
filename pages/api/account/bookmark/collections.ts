import { addCollectionBookmark } from "@/api/db/bookmark";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.post(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.body.bookmarkId)
    return res.status(404).json({ error: "BookmarkId not found" });

  if (!req.body.collection)
    return res.status(404).json({ error: "Collection not found" });

  const bookmarkId = req.body.bookmarkId;
  const collection = req.body.collection;
  try {
    const addedCollection = await addCollectionBookmark(
      req.db,
      bookmarkId,
      collection
    );
    if (!addedCollection)
      return res.status(500).json({ error: "Collection not added" });
    return res.json({ collection });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
