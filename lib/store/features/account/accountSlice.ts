import fetcher from "@/utils/fetcher";
import {
  onSaveAccountService,
  onUpdateAvatarAccountService,
} from "lib/services/account";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "lib/models/user/user";
import type { AppState } from "../../index";

export interface AccountState {
  value: Account | null;
  status: "idle" | "loading" | "failed";
}

const initialState: AccountState = {
  value: null,
  status: "idle",
};

export const fetchAccount = createAsyncThunk(
  "account/fetchAccount",
  async () => {
    const response = await fetcher("/api/account");
    return response.account;
  }
);

export const updateAccount = createAsyncThunk(
  "account/updateAccount",
  async (account: Account) => {
    const response = await onSaveAccountService({ account });
    return response;
  }
);

export const updateAvatar = createAsyncThunk(
  "account/updateAvatar",
  async (formData: FormData) => {
    const response = await onUpdateAvatarAccountService({ formData });
    return response;
  }
);

export const removeAccountOnSignOut = createAsyncThunk(
  "account/removeAccountOnSignOut",
  async (timing?: number) => {
    return new Promise<void>((resolve) =>
      setTimeout(() => resolve(), timing ?? 2000)
    );
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAccount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchAccount.rejected, (state) => {
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
  },
});

export const selectAccount = (state: AppState) => state.account.value;
export default accountSlice.reducer;
