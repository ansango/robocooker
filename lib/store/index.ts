import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./features/user";
import accountReducer from "./features/account/account";
import categoriesReducer from "./features/categories";
import blenderReducer from "./features/blenders";
import lastRecipesReducer from "./features/recipes/lastRecipes";
import myRecipesReducer from "./features/account/myRecipes";
import recipeReducer from "./features/recipes/recipe";
import commentsReducer from "./features/comments";
import profileReducer from "./features/profile";
import favoritesReducer from "./features/account/favorites";
import bookmarkReducer from "./features/account/bookmark";
import collectionReducer from "./features/account/collection";
export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      account: accountReducer,
      favorites: favoritesReducer,
      bookmark: bookmarkReducer,
      collection: collectionReducer,
      myRecipes: myRecipesReducer,
      categories: categoriesReducer,
      blenders: blenderReducer,
      lastRecipes: lastRecipesReducer,
      recipe: recipeReducer,
      comments: commentsReducer,
      profile: profileReducer,
    },
  });
}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
