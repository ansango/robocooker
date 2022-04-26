import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { AppState } from "../..";

import { initialState } from "./state";
import { getProfile } from "./thunk";

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
        state.value = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getProfile.rejected, (state) => {
        state.status = "failed";
        toast.error("Error al obtener el perfil");
      });
  },
});

export const selectProfile = (state: AppState) => state.profile.value;
export const selectProfileStatus = (state: AppState) => state.profile.status;

export default profileSlice.reducer;
