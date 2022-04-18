import Navbar from "components/dashboard/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { routeActive } from "@/utils/router";
import Link from "next/link";
import Brand from "components/common/Navbar/Brand";
import { routes, routesDashboard } from "components/common/Navbar/routes";
import { Icon, Logo } from "components/common/Icons";

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
            <div className="absolute w-full h-full bg-base-200">{children}</div>
          </motion.main>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border-r">
            <div className="flex flex-col w-full">
              <div className="">
                <li>
                  <Link href="/" passHref>
                    <a
                      className={
                        routeActive(pathname, "/")
                          ? "bg-primary text-white"
                          : ""
                      }
                    >
                      <Logo
                        className={
                          routeActive(pathname, "/")
                            ? "w-5 h-5 fill-primary dark:fill-gray-200"
                            : "w-5 h-5 fill-primary dark:fill-gray-400"
                        }
                      />
                      Inicio
                    </a>
                  </Link>
                </li>
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
