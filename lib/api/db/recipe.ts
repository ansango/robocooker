import { Db, ObjectId } from "mongodb";

import { Recipe, RecipeDAO, RecipeDTO } from "@/models/recipe/recipe";
import { updateAccountRecipesById } from "./account";
import { Account, User } from "@/models/user/user";

export const insertRecipe = async (
  db: Db,
  content: RecipeDAO
): Promise<Recipe> => {
  const recipe: Recipe = {
    ...content,
    likes: [],
    comments: [],
    created: new Date(),
    _id: new ObjectId(),
  };
  try {
    await db.collection("recipes").insertOne(recipe);
    await updateAccountRecipesById(db, content.accountId, recipe._id);
    return recipe;
  } catch (error) {
    throw error;
  }
};

export const findAllRecipesPopulated = async (
  db: Db
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db.collection("recipes").find().toArray()) as Recipe[];
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
    return Promise.all(queries);
  } catch (error) {
    throw error;
  }
};

export const findLastRecipesPopulated = async (
  db: Db,
  limit: number
): Promise<RecipeDTO[] | void> => {
  console.log(limit);
  try {
    const data = (await db
      .collection("recipes")
      .find()
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
