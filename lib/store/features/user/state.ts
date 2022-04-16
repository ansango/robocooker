import { User } from "@/models/user/user";

export interface UserState {
  value: User | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: UserState = {
  value: null,
  status: "idle",
};
