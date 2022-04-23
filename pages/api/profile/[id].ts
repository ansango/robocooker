import { findAccountById } from "@/api/db/account";
import { findRecipesByAccountId } from "@/api/db/recipe";
import { findUserByAccountId } from "@/api/db/user";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { RecipeDTO } from "@/models/recipe/recipe";
import { Profile } from "@/models/user/profile";
import { Account, User } from "@/models/user/user";
import nc from "next-connect";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  if (!req.query.id) return res.status(400).json({ error: "Bad Request" });
  const accountId: AccountId = req.query.id;
  try {
    const user = (await findUserByAccountId(req.db, accountId)) as User;
    const account = (await findAccountById(req.db, accountId)) as Account;
    const recipes = (await findRecipesByAccountId(
      req.db,
      accountId
    )) as RecipeDTO[];
    const profile: Profile = {
      username: user.username,
      accountId,
      firstName: account.firstName,
      lastName: account.lastName,
      about: account.about,
      avatar: account.avatar,
      followers: account.followers,
      following: account.following,
      recipes,
      social: account.social,
    };
    return res.json({ profile });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
