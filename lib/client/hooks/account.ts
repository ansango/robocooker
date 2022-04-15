import { Account } from "models/user/user";
import useSWR from "swr";
import fetcher from "../fetcher";

type DataAccount = {
  account: Account | null;
};

const useCurrentAccount = () => useSWR<DataAccount>("/api/account", fetcher);

export { useCurrentAccount };
