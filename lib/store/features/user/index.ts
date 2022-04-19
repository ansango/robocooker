import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../../index";
import { initialState } from "./state";
import {
  getUser,
  signIn,
  signOut,
  signUp,
  updateUser,
  recoveryPassword,
  resetPassword,
  updatePassword,
  verifyEmail,
  deleteUser,
} from "./thunks";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "idle";
        state.value = null;
      })
      .addCase(signOut.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(updateUser.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updatePassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(updatePassword.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(recoveryPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(recoveryPassword.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(recoveryPassword.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(resetPassword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(resetPassword.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.status = "idle";
      });
    builder.addCase(verifyEmail.rejected, (state) => {
      state.status = "failed";
    });
    builder
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.status = "idle";
        state.value = null;
      })
      .addCase(deleteUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUser = (state: AppState) => state.user.value;
export const selectUserStatus = (state: AppState) => state.user.status;
export default userSlice.reducer;
