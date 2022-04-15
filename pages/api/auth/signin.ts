import passport from "@/lib-api/auth/passport";
import { auth, database } from "@/lib-api/middlewares";
import { options } from "@/lib-api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.post(passport.authenticate("local"), async (req, res) => {
  return res.json({ user: req.user });
});

export default handler;
