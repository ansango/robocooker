import { Profile } from "@/models/user/profile";

export interface ProfileState {
  value: Profile | null;
  status: "idle" | "loading" | "failed";
  onUpdateFollow: boolean;
  onUpdateUnFollow: boolean;
}

export const initialState: ProfileState = {
  value: null,
  status: "idle",
  onUpdateFollow: false,
  onUpdateUnFollow: false,
};
