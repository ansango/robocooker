import { Account } from "lib/models/user/user";
import { type Db, ObjectId } from "mongodb";

export const findAccountByUserId = (db: Db, accountId: AccountId) => {
  return db
    .collection("accounts")
    .findOne({ _id: new ObjectId(accountId) })
    .then((account) => account || null);
};

export const findAccountById = async (db: Db, accountId: AccountId) => {
  const account = (await db
    .collection("accounts")
    .findOne({ _id: new ObjectId(accountId) })
    .then((account) => account || null)) as Account;
  return account;
};

export const updateAccountDataById = async (
  db: Db,
  accountId: AccountId,
  { about, address, birthday, firstName, lastName, phone }: Account
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $set: { about, address, birthday, firstName, lastName, phone } }
    )
    .then((account) => account || null);
};

export const updateAvatarAccountById = async (
  db: Db,
  accountId: AccountId,
  avatar: Url
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate({ _id: new ObjectId(accountId) }, { $set: { avatar } })
    .then((account) => account || null);
};

export const updateAccountRecipesById = async (
  db: Db,
  accountId: AccountId,
  recipe: RecipeId
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $push: { recipes: recipe.toString() } }
    )
    .then((account) => account || null);
};

export const updatePreferencesAccountById = async (
  db: Db,
  accountId: AccountId,
  preferences: string[]
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $set: { preferences } }
    )
    .then((account) => account || null);
};

export const updateSocialNetworksAccountById = async (
  db: Db,
  accountId: AccountId,
  socialNetworks: any
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $set: { social: socialNetworks } }
    )
    .then((account) => account || null);
};
