import { Recipe } from "@/models/recipe/recipe";
import { Collection, CollectionDAO } from "@/models/user/bookmark";
import { Db, ObjectId } from "mongodb";

export const insertCollection = async (
  db: Db,
  data: CollectionDAO
): Promise<Collection> => {
  const collection: Collection = {
    ...data,
    _id: new ObjectId(),
    created: new Date(),
  };
  try {
    await db.collection("collections").insertOne(collection);
    return collection;
  } catch (error) {
    throw error;
  }
};

export const findCollectionsByIds = async (
  db: Db,
  collectionIds: CollectionId[]
): Promise<Collection[]> => {
  const collections = (await db
    .collection("collections")
    .find({ _id: { $in: collectionIds.map((id) => new ObjectId(id)) } })
    .toArray()) as Collection[];
  return collections;
};

export const findCollectionById = async (
  db: Db,
  collectionId: CollectionId
): Promise<Collection> => {
  const collection = (await db
    .collection("collections")
    .findOne({ _id: new ObjectId(collectionId) })) as Collection;
  return collection;
};

export const findCollectedRecipesByIds = async (
  db: Db,
  recipesIds: RecipeId[]
): Promise<Recipe[]> => {
  const recipes = (await db
    .collection("recipes")
    .find({ _id: { $in: recipesIds.map((id) => new ObjectId(id)) } })
    .toArray()) as Recipe[];
  return recipes;
};
