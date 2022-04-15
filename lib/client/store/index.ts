import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import accountReducer from "./features/account/accountSlice";
import categoriesReducer from "./features/categories/categoriesSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      account: accountReducer,
      categories: categoriesReducer,
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
