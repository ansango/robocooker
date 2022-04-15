import {
  responseService,
  errorSaveDataAccountService,
  errorUpdatePassword,
  errorVerifyEmail,
} from "lib/constants/services";
import { User } from "models/user/user";
import toast from "react-hot-toast";
import fetcher from "../fetcher";

const onSaveUserService = async ({ user }: { user: User }): Promise<User> => {
  try {
    const response = await fetcher("/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...user,
      }),
    });
    toast.success(responseService.saveUser);
    return response.user;
  } catch (err: any) {
    toast.error(
      errorSaveDataAccountService[err.error] ||
        errorSaveDataAccountService.default
    );
    throw err;
  }
};

const onUpdatePasswordService = async ({
  oldPassword,
  newPassword,
}: {
  oldPassword: Password;
  newPassword: Password;
}): Promise<void> => {
  try {
    await fetcher("/api/user/password", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    });
    toast.success(responseService.updatePassword);
  } catch (err: any) {
    toast.error(errorUpdatePassword[err.error] || errorUpdatePassword.default);
    throw err;
  }
};

const onRecoveryPasswordService = async ({
  email,
}: {
  email: Email;
}): Promise<void> => {
  try {
    await fetcher("/api/user/password/recovery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });
    toast.success(responseService.recoveryPassword);
  } catch (err: any) {
    toast.error(errorUpdatePassword[err.error] || errorUpdatePassword.default);
    throw err;
  }
};

const onResetPasswordService = async ({
  tokenId,
  newPassword,
  redirect,
}: {
  tokenId: TokenId;
  newPassword: Password;
  redirect: () => Promise<boolean>;
}): Promise<void> => {
  try {
    await fetcher(`/api/user/password/recovery`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tokenId,
        newPassword,
      }),
    });
    toast.success(responseService.resetPassword);
    redirect();
  } catch (err: any) {
    toast.error(errorUpdatePassword[err.error] || errorUpdatePassword.default);
    throw err;
  }
};

const onVerifyEmailService = async (): Promise<boolean> => {
  try {
    await fetcher("/api/email/verify", {
      method: "POST",
    });
    toast.success(responseService.verifyEmail);
    return true;
  } catch (err: any) {
    toast.error(errorVerifyEmail[err.error] || errorUpdatePassword.default);
    throw err;
  }
};

export {
  onSaveUserService,
  onUpdatePasswordService,
  onRecoveryPasswordService,
  onResetPasswordService,
  onVerifyEmailService,
};
