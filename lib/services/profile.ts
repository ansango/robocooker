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

export const onGetAllProfilesService = async (): Promise<Profile[]> => {
  try {
    const response = await fetcher(`/api/profiles`, {
      method: "GET",
    });
    return response.profiles;
  } catch (error) {
    throw error;
  }
};
