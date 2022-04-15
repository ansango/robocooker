import passport from "@/lib-api/auth/passport";
import { auth, database } from "@/lib-api/middlewares";
import { options } from "@/lib-api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.post(passport.authenticate("local"), async (req, res) => {
  res.json({ user: req.user });
});

handler.delete(async (req, res) => {
  await req.session.destroy();
  res.status(204).end();
});

export default handler;
