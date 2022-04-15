import { fetchAccount } from "@/lib-client/store/features/account/accountSlice";
import {
  fetchCategories,
  selectCategories,
} from "@/lib-client/store/features/categories/categoriesSlice";
import {
  fetchUser,
  selectUser,
} from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";
import DashboardLayout from "./DashboardLayout";
import MainLayout from "./MainLayout";

type Props = {
  children?: ReactNode;
};

const WrapperLayout: FC<Props> = ({ children }) => {
  const isDashboard = useRouter().pathname.includes("/dashboard");
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const categories = useAppSelector(selectCategories);
  useEffect(() => {
    if (!categories) dispatch(fetchCategories());
  }, [categories, dispatch]);
  useEffect(() => {
    if (!user) dispatch(fetchUser());
    if (user) dispatch(fetchAccount());
  }, [user, dispatch]);
  return (
    <>
      {!isDashboard && <MainLayout>{children}</MainLayout>}
      {isDashboard && <DashboardLayout>{children}</DashboardLayout>}
    </>
  );
};

export default WrapperLayout;
