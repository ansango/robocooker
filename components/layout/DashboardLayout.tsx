import Navbar from "components/dashboard/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import { routeActive } from "@/utils/router";
import Link from "next/link";
import Brand from "components/common/Navbar/Brand";
import { routes, routesDashboard } from "components/common/Navbar/routes";
import { Icon, Logo } from "components/common/Icons";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/features/user";
import DrawerBar from "components/dashboard/Drawer/DrawerBar";
import DrawerContainer from "components/dashboard/Drawer/DrawerContainer";

type PropsAuth = {
  children?: ReactNode;
};

const WithAuth: FC<PropsAuth> = ({ children }) => {
  const user = !!useAppSelector(selectUser);
  const { push } = useRouter();
  useEffect(() => {
    if (!user) push("/signin");
  }, [user, push]);
  if (!user) return null;
  return <>{children}</>;
};

type Props = {
  children?: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();
  return (
    <WithAuth>
      <DrawerContainer>
        <Navbar />
        <motion.main
          key={route}
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          transition={{ delay: 0.5 }}
          className="w-full h-full relative"
        >
          <div className="absolute w-full h-full">{children}</div>
        </motion.main>
      </DrawerContainer>
    </WithAuth>
  );
};

export default DashboardLayout;
