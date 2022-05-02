import { Recipe, RecipeDTO } from "@/models/recipe/recipe";
import { Account, User } from "@/models/user/user";
import { Db, ObjectId } from "mongodb";

export const findAllCategories = (db: Db) => {
  return db
    .collection("categories")
    .find()
    .toArray()
    .then((categories) => categories || []);
};

export const findAllRecipesByCategory = async (
  db: Db,
  category: CategoryName,
  limit: number
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db
      .collection("recipes")
      .find({
        categories: category,
      })
      .sort({ created: -1 })
      .limit(limit)
      .toArray()) as Recipe[];

    const queries = data.map(async (recipe) => {
      const accountId = recipe.accountId;
      const { avatar, firstName, lastName } = (await db
        .collection("accounts")
        .findOne({ _id: new ObjectId(accountId) })) as Account;

      const { username } = (await db
        .collection("users")
        .findOne({ accountId: new ObjectId(accountId) })) as User;
      return { ...recipe, account: { avatar, firstName, lastName, username } };
    });

    return Promise.all(queries).then((recipes) =>
      recipes.sort((a, b) => b.created.getTime() - a.created.getTime())
    );
  } catch (error) {
    throw error;
  }
};
