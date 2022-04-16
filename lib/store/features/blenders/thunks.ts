import { onGetAllBlendersService } from "@/services/blenders";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlenders = createAsyncThunk(
  "blenders/getBlenders",
  async () => {
    const response = onGetAllBlendersService();
    return response;
  }
);
