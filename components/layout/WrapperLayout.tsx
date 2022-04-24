
import { getAccount } from "@/store/features/account/account/thunks";
import { selectUser } from "@/store/features/user";
import { getUser } from "@/store/features/user/thunks";
import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { FC, ReactNode, useEffect } from "react";

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
