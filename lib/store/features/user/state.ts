import { User } from "@/models/user/user";

export interface UserState {
  value: User | null;
  status: "idle" | "loading" | "failed";
  onSignIn: boolean;
  onSignUp: boolean;
  onRecoveryPassword: boolean;
  onResetPassword: boolean;
  onUpdatePassword: boolean;
  onUpdateUser: boolean;
  onDeleteUser: boolean;
}

export const initialState: UserState = {
  value: null,
  status: "idle",
  onSignIn: false,
  onSignUp: false,
  onRecoveryPassword: false,
  onResetPassword: false,
  onUpdatePassword: false,
  onUpdateUser: false,
  onDeleteUser: false,
};
