import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./features/user";
import accountReducer from "./features/account";
import categoriesReducer from "./features/categories";
import blenderReducer from "./features/blenders";
import lastRecipesReducer from "./features/recipes";
export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      account: accountReducer,
      categories: categoriesReducer,
      blenders: blenderReducer,
      lastRecipes: lastRecipesReducer,
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
