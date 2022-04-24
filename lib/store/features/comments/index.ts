import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";

import { initialState } from "./state";
import { getComments, addComment } from "./thunk";

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.status = "failed";
      });
    builder.addCase(addComment.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = state.value
        ? [...state.value, action.payload]
        : [action.payload];
    });
    builder.addCase(addComment.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const selectComments = (state: AppState) => state.comments.value;

export default commentsSlice.reducer;
