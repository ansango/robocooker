import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.post(async (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const recipeId = req.body.recipeId;
  const accountId = req.user.accountId;
  const accountLike = await req.db.collection("recipes").findOneAndUpdate(
    { _id: recipeId },
    {
      $pull: { likes: accountId.toString() },
    }
  );
  const recipeLike = await req.db.collection("accounts").findOneAndUpdate(
    { _id: accountId },
    {
      $pull: { favorites: recipeId.toString() },
    }
  );
  if (!accountLike.value || !recipeLike.value) {
    res.status(404).json({ error: "Recipe or account not found" });
    return;
  }

  res.status(204).end();
});


//TODO : SIN ACABAR!!! ---> MIGRAR A DB

export default handler;
