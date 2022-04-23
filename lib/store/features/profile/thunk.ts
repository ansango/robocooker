import { onGetProfileService } from "@/services/profile";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (username: Username) => {
    const response = await onGetProfileService(username);
    return response;
  }
);
