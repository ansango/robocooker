import nc from "next-connect";
import { database } from "@/lib-api/middlewares";
import { options } from "@/lib-api/nc";
import { findAllBlenders } from "@/lib-api/db/blenders";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  try {
    const blenders = await findAllBlenders(req.db);
    return res.json({ blenders });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
