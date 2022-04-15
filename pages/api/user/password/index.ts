import {
  findUserById,
  updateUserPasswordByOldPassword,
} from "@/lib-api/db/user";
import { auth, database } from "@/lib-api/middlewares";
import { options } from "@/lib-api/nc";
import { updatePasswordValidation } from "@/lib-api/schemas/validations";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.put(updatePasswordValidation(), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  const { oldPassword, newPassword } = req.body;
  const success = await updateUserPasswordByOldPassword(
    req.db,
    req.user._id,
    oldPassword,
    newPassword
  );
  if (!success) return res.status(400).json({ error: "Invalid old password" });
  return res.status(204).end();
});

export default handler;
