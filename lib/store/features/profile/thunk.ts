import { onGetProfileService } from "@/services/profile";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (accountId: AccountId) => {
    const response = await onGetProfileService(accountId);
    return response;
  }
);
