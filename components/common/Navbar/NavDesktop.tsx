import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./routes";
import { motion } from "framer-motion";

const NavDesktop = () => {
  const { pathname } = useRouter();
  return (
    <ul className="hidden w-full md:flex md:w-auto ml-3">
      {routes.map(({ label, path }) => {
        return (
          <motion.li
            key={path}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href={path}>
              <a
                className={
                  routeActive(pathname, path)
                    ? "btn btn-link btn-active normal-case text-primary dark:text-primary-content"
                    : "btn btn-link normal-case text-gray-600 dark:text-base-content"
                }
              >
                {label}
              </a>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
