import { Db } from "mongodb";

const findAllCategories = (db: Db) => {
  return db
    .collection("categories")
    .find()
    .toArray()
    .then((categories) => categories || []);
};

export { findAllCategories };