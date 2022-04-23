import { Profile } from "@/models/user/profile";
import fetcher from "@/utils/fetcher";

export const onGetProfileService = async (
  username: Username
): Promise<Profile> => {
  try {
    const response = await fetcher(`/api/profile/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.profile;
  } catch (error) {
    throw error;
  }
};
