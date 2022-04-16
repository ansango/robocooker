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

const WithAuth: FC<Props> = ({ children }) => {
  const user = !!useAppSelector(selectUser);
  const { push } = useRouter();
  useEffect(() => {
    if (!user) push("/signin");
  }, [user, push]);
  if (!user) return null;
  return <>{children}</>;
};

const WrapperLayout: FC<Props> = ({ children }) => {
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const categories = useAppSelector(selectCategories);
  useEffect(() => {
    if (!user) dispatch(fetchUser());
    if (user) dispatch(fetchAccount());
    if (!categories) dispatch(fetchCategories());
  }, [dispatch, user, categories]);
  return pathname.startsWith("/dashboard") ? (
    <WithAuth>
      <DashboardLayout>{children}</DashboardLayout>
    </WithAuth>
  ) : (
    <MainLayout>{children}</MainLayout>
  );
};

export default WrapperLayout;
