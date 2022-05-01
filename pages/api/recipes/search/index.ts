import nc from "next-connect";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Recipe } from "@/models/recipe/recipe";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  const q = req.body.query
    .replace(/\r\n/g, "")
    .replace(/^\s+|\s+$/, "")
    .replace(/[^a-z\s]+/gi, "")
    .replace(/\s+$/, "");

  const parts = q.split(/\s/);
  const terms = parts.map((part: string) => ({
    $regex: part,
    $options: "i",
  }));

  const query = terms.reduce((acc: any, term: string) => {
    return {
      $or: [
        { name: term },
        { description: term },
        { ingredients: term },
        { blenders: term },
        { categories: term },
      ],
    };
  }, {});

  try {
    const recipes = (await req.db
      .collection("recipes")
      .find(query)
      .toArray()) as Recipe[];

    return res.json({ recipes });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
