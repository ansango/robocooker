import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";
import { initialState } from "./state";
import { getBlenders } from "./thunks";

export const blendersSlice = createSlice({
  name: "blenders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlenders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBlenders.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getBlenders.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectBlenders = (state: AppState) => state.blenders.value;
export const selectBlendersStatus = (state: AppState) => state.blenders.status;
export default blendersSlice.reducer;
