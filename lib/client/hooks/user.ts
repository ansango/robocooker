import fetcher from "@/lib-client/fetcher";
import { Account, User } from "models/user/user";

import useSWR from "swr";

type DataUser = {
  user: User | null;
};

const useCurrentUser = () => useSWR<DataUser>("/api/user", fetcher);
const useUser = (id: string) => useSWR(`/api/users/${id}`, fetcher);

export { useCurrentUser, useUser };
