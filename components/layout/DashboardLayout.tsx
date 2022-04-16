import Navbar from "components/dashboard/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import Brand from "components/common/Navbar/Brand";
import { routes, routesDashboard } from "components/common/Navbar/routes";
import { Icon } from "components/common/Icons";

type Props = {
  children?: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  const { route, pathname } = useRouter();
  return (
    <div className="">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center relative">
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
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <Brand />
            <div className="flex flex-col w-full">
              <div tabIndex={0} className="collapse collapse-arrow bg-base-100">
                <div className="collapse-title text-md font-medium">
                  <span className="flex items-center space-x-3">
                    <Icon icon="MapIcon" kind="outline" className="w-5 h-5" />
                    <a>Navegación</a>
                  </span>
                </div>
                <div className="collapse-content">
                  {routes.map(({ label, path, icon }) => {
                    const cn = routeActive(pathname, path)
                      ? "bg-primary text-white"
                      : "";
                    return (
                      <li key={path}>
                        <Link href={path}>
                          <a className={cn}>
                            <Icon
                              icon={icon}
                              kind="outline"
                              className="w-5 h-5"
                            />
                            {label}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </div>
              </div>
              <div className="divider my-3"></div>
              {routesDashboard.map(({ label, path, icon }) => {
                const cn = routeActive(pathname, path)
                  ? "bg-primary text-white"
                  : "";
                return (
                  <li key={path}>
                    <Link href={path}>
                      <a className={cn}>
                        <Icon icon={icon} kind="outline" className="w-5 h-5" />
                        {label}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
