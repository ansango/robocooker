import { Db } from "mongodb";

const findAllBlenders = (db: Db) => {
  return db
    .collection("blenders")
    .find()
    .toArray()
    .then((blenders) => blenders || []);
};

export { findAllBlenders };
