import { getAccount } from "@/store/features/account/thunks";
import { selectBlenders } from "@/store/features/blenders";
import { getBlenders } from "@/store/features/blenders/thunks";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
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
  const blenders = useAppSelector(selectBlenders);
  useEffect(() => {
    if (!user) dispatch(getUser());
    if (user) dispatch(getAccount());
    if (!categories) dispatch(getCategories());
    if (!blenders) dispatch(getBlenders());
  }, [dispatch, user, categories, blenders]);
  return pathname.startsWith("/dashboard") ? (
    <WithAuth>
      <DashboardLayout>{children}</DashboardLayout>
    </WithAuth>
  ) : (
    <MainLayout>{children}</MainLayout>
  );
};

export default WrapperLayout;
