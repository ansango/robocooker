import { Account } from "@/models/user/user";

export interface AccountState {
  value: Account | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: AccountState = {
  value: null,
  status: "idle",
};
