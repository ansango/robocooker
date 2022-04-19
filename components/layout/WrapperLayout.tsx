import { getAccount } from "@/store/features/account/thunks";
import { selectUser } from "@/store/features/user";
import { getUser } from "@/store/features/user/thunks";
import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import MainLayout from "./MainLayout";

type Props = {
  children?: ReactNode;
};

const WrapperLayout: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  useEffect(() => {
    if (!user) dispatch(getUser());
    if (user) dispatch(getAccount());
  }, [dispatch, user]);
  return <>{children}</>;
};

export default WrapperLayout;
