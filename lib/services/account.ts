import { Account, SocialNetwork } from "lib/models/user/user";
import fetcher from "../utils/fetcher";

const onGetAccountService = async (): Promise<Account> => {
  try {
    const response = await fetcher("/api/account");
    return response.account;
  } catch (error) {
    throw error;
  }
};

const onSaveAccountService = async ({
  account,
}: {
  account: Account;
}): Promise<Account> => {
  try {
    const response = await fetcher("/api/account", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...account,
      }),
    });
    return response.account;
  } catch (err: any) {
    throw err;
  }
};

const onUpdateAvatarAccountService = async ({
  formData,
}: {
  formData: FormData;
}): Promise<{ avatar: Url }> => {
  try {
    const response = await fetcher("/api/account/avatar", {
      method: "PATCH",
      body: formData,
    });
    return { avatar: response.avatar };
  } catch (err: any) {
    throw err;
  }
};

const onUpdatePreferencesService = async (
  account: Account
): Promise<Account> => {
  try {
    const response = await fetcher("/api/account/preferences", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...account,
      }),
    });
    return response.account;
  } catch (err: any) {
    throw err;
  }
};

const onUpdateSocialNetworkService = async (
  account: Account
): Promise<Account> => {
  try {
    const response = await fetcher("/api/account/social", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...account,
      }),
    });
    return response.account;
  } catch (err: any) {
    throw err;
  }
};

export {
  onGetAccountService,
  onSaveAccountService,
  onUpdateAvatarAccountService,
  onUpdatePreferencesService,
  onUpdateSocialNetworkService,
};
