import fetcher from "@/lib-client/fetcher";
import {
  onSignInService,
  onSignOutService,
  onSignUpService,
} from "@/lib-client/services/auth";
import {
  onRecoveryPasswordService,
  onResetPasswordService,
  onSaveUserService,
  onUpdatePasswordService,
  onVerifyEmailService,
} from "@/lib-client/services/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "models/user/user";

import type { AppState } from "../../index";

export interface UserState {
  value: User | null;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  value: null,
  status: "idle",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetcher("/api/user");
  return response.user;
});

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }: { email: Email; password: Password }) => {
    const response = await onSignInService({ email, password });
    return response;
  }
);

export const signUp = createAsyncThunk(
  "user/sigUp",
  async ({
    email,
    password,
    username,
  }: {
    email: Email;
    password: Password;
    username: Username;
  }) => {
    const response = await onSignUpService({ email, password, username });
    return response;
  }
);

export const signOut = createAsyncThunk("user/signOut", async () => {
  await onSignOutService();
  return null;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: User) => {
    const response = await onSaveUserService({ user });
    return response;
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async ({
    oldPassword,
    newPassword,
  }: {
    oldPassword: Password;
    newPassword: Password;
  }) => {
    const response = await onUpdatePasswordService({
      oldPassword,
      newPassword,
    });
    return response;
  }
);

export const recoveryPassword = createAsyncThunk(
  "user/recoveryPassword",
  async ({ email }: { email: Email }) => {
    await onRecoveryPasswordService({ email });
    return null;
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({
    tokenId,
    newPassword,
    redirect,
  }: {
    tokenId: TokenId;
    newPassword: Password;
    redirect: () => Promise<boolean>;
  }) => {
    await onResetPasswordService({ tokenId, newPassword, redirect });
    return null;
  }
);

export const verifyEmail = createAsyncThunk("user/verifyEmail", async () => {
  await onVerifyEmailService();
  return null;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
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
  },
});

export const selectUser = (state: AppState) => state.user.value;
export default userSlice.reducer;
