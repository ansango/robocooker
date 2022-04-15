import bcrypt from "bcryptjs";
import { type Db, ObjectId } from "mongodb";
import { normalizeEmail } from "@/lib-utils/validations";
import { Account, Address, User } from "models/user/user";

const dbProjectionUsers = (prefix = "") => {
  return {
    [`${prefix}password`]: 0,
    [`${prefix}email`]: 0,
    [`${prefix}emailVerified`]: 0,
  };
};

const findUserWithEmailAndPassword = async (
  db: Db,
  email: Email,
  password: Password
) => {
  const user = await db
    .collection("users")
    .findOne({ email: normalizeEmail(email) });

  if (user && (await bcrypt.compare(password, user.password))) {
    return { ...user, password: undefined }; // filtered out password
  }
  return null;
};

const findUserForAuth = async (db: Db, userId: UserId) => {
  return db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: { password: 0 } })
    .then((user) => user || null);
};

const findUserById = async (db: Db, userId: UserId) => {
  return db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
};

const findUserByUsername = async (db: Db, username: Username) => {
  return db
    .collection("users")
    .findOne({ username }, { projection: dbProjectionUsers() })
    .then((user) => user || null);
};

const findUserByEmail = async (db: Db, email: Email) => {
  return db
    .collection("users")
    .findOne(
      { email: normalizeEmail(email) },
      { projection: dbProjectionUsers() }
    )
    .then((user) => user || null);
};

const updateUserPasswordByOldPassword = async (
  db: Db,
  userId: UserId,
  oldPassword: Password,
  newPassword: Password
) => {
  const user = await db.collection("users").findOne(new ObjectId(userId));
  if (!user) return null;
  const matchedPasswords = await bcrypt.compare(oldPassword, user.password);
  if (!matchedPasswords) return null;
  const password = await bcrypt.hash(newPassword, 10);
  await db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { password } });
  return true;
};

const updateUserPasswordRecovery = async (
  db: Db,
  userId: UserId,
  newPassword: Password
) => {
  const password = await bcrypt.hash(newPassword, 10);
  await db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { password } });
  return true;
};

const updateUserAccountDataById = async (
  db: Db,
  userId: UserId,
  { email, username }: { email: Email; username: Username }
) => {
  return db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { email, username } });
};

const updateUserEmailVerifiedById = async (db: Db, userId: UserId) => {
  return db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { emailVerified: true } })
    .then((user) => console.log(user));
};

const insertUser = async (
  db: Db,
  {
    email,
    originalPassword,
    username,
  }: {
    email: Email;
    originalPassword: Password;
    username: Username;
  }
) => {
  const password = await bcrypt.hash(originalPassword, 10);

  const address: Address = {
    address: "",
    city: "",
    country: "",
    zip: "",
  };

  const account: Account = {
    _id: new ObjectId(),
    about: "",
    avatar: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthday: null,
    address,
    recipes: [],
    collections: [],
    favorites: [],
    chat: [],
    followers: [],
    following: [],
    preferences: [],
  };
  await db.collection("accounts").insertOne({ ...account });

  const user: User = {
    _id: new ObjectId(),
    accountId: account._id,
    username,
    email,
    emailVerified: false,
    password,

    created: new Date(),
  };

  await db.collection("users").insertOne({ ...user });

  return { ...user };
};

export {
  findUserWithEmailAndPassword,
  findUserForAuth,
  findUserById,
  findUserByUsername,
  findUserByEmail,
  updateUserAccountDataById,
  updateUserPasswordByOldPassword,
  updateUserPasswordRecovery,
  updateUserEmailVerifiedById,
  insertUser,
};
