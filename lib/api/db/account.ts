import { Account } from "models/user/user";
import { type Db, ObjectId } from "mongodb";

const findAccountByUserId = (db: Db, accountId: AccountId) => {
  return db
    .collection("accounts")
    .findOne({ _id: new ObjectId(accountId) })
    .then((account) => account || null);
};

const updateAccountDataById = async (
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

const updateAvatarAccountById = async (
  db: Db,
  accountId: AccountId,
  avatar: Url
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate({ _id: new ObjectId(accountId) }, { $set: { avatar } })
    .then((account) => account || null);
};

export { findAccountByUserId, updateAccountDataById, updateAvatarAccountById };
