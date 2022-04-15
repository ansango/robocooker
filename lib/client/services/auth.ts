import fetcher from "../fetcher";
import toast from "react-hot-toast";
import { errorAuthService, responseService } from "lib/constants/services";
import { User } from "models/user/user";

const onSignInService = async ({
  email,
  password,
}: {
  email: Email;
  password: Password;
}): Promise<User> => {
  try {
    const response = await fetcher("/api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    toast.success(responseService.sigIn);
    return response.user;
  } catch (err: any) {
    toast.error(errorAuthService[err.error] || errorAuthService.default);
    throw err;
  }
};

const onSignUpService = async ({
  email,
  password,
  username,
}: {
  email: Email;
  password: Password;
  username: Username;
}): Promise<User> => {
  try {
    const response = await fetcher("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        username,
      }),
    });
    toast.success(responseService.sigUp);
    return response.user;
  } catch (err: any) {
    toast.error(errorAuthService[err.error] || errorAuthService.default);
    throw err;
  }
};

const onSignOutService = async (): Promise<void> => {
  try {
    await fetcher("/api/auth/signout", {
      method: "DELETE",
    });
  } catch (err) {
    throw err;
  }
};

export { onSignInService, onSignUpService, onSignOutService };
