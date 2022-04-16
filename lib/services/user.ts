import { User } from "lib/models/user/user";
import fetcher from "../utils/fetcher";

const onGetUserService = async (): Promise<User | null> => {
  try {
    const response = await fetcher("/api/user");
    return response.user;
  } catch (err: any) {
    throw err;
  }
};

const onSaveUserService = async ({ user }: { user: User }): Promise<User> => {
  try {
    const response = await fetcher("/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...user,
      }),
    });

    return response.user;
  } catch (err: any) {
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
  } catch (err: any) {
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
  } catch (err: any) {
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

    redirect();
  } catch (err: any) {
    throw err;
  }
};

const onVerifyEmailService = async (): Promise<boolean> => {
  try {
    await fetcher("/api/email/verify", {
      method: "POST",
    });
    return true;
  } catch (err: any) {
    throw err;
  }
};

export {
  onSaveUserService,
  onUpdatePasswordService,
  onRecoveryPasswordService,
  onResetPasswordService,
  onVerifyEmailService,
  onGetUserService,
};