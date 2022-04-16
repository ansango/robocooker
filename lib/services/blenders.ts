import { Blender } from "lib/models/blender";
import fetcher from "../utils/fetcher";

const onGetAllBlendersService = async (): Promise<Blender[]> => {
  try {
    const response = await fetcher(`${process.env.WEB_URI}/api/blenders/all`, {
      method: "GET",
    });
    return response.blenders;
  } catch (err) {
    throw err;
  }
};

export { onGetAllBlendersService };
