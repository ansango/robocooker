import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./features/user";
import accountReducer from "./features/account/account";
import categoriesReducer from "./features/categories";
import blenderReducer from "./features/blenders";
import lastRecipesReducer from "./features/recipes/lastRecipes";
import myRecipesReducer from "./features/account/myRecipes";
import recipeReducer from "./features/recipes/recipe";
export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      account: accountReducer,
      myRecipes: myRecipesReducer,
      favoriteRecipes: {} as any,
      categories: categoriesReducer,
      blenders: blenderReducer,
      lastRecipes: lastRecipesReducer,
      recipe: recipeReducer,
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
