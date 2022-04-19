import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import type { AppState } from "../../index";
import {
  getAccount,
  removeAccountOnSignOut,
  updateAccount,
  updateAvatar,
  updatePreferences,
  updateSocial,
} from "./thunks";

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getAccount.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updateAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(updateAccount.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updateAvatar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.status = "idle";
        if (state.value) {
          state.value.avatar = action.payload.avatar;
        }
      })
      .addCase(updateAvatar.rejected, (state) => {
        state.status = "failed";
      });
    builder.addCase(removeAccountOnSignOut.fulfilled, (state) => {
      state.value = null;
      state.status = "idle";
    });
    builder.addCase(removeAccountOnSignOut.rejected, (state) => {
      state.status = "failed";
    });
    builder.addCase(removeAccountOnSignOut.pending, (state) => {
      state.status = "loading";
    });
    builder
      .addCase(updatePreferences.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePreferences.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(updatePreferences.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updateSocial.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSocial.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(updateSocial.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectAccount = (state: AppState) => state.account.value;
export const selectAccountStatus = (state: AppState) => state.account.status;
export default accountSlice.reducer;
