import { useRouter } from "next/router";
import { routes } from "./routes";
import { motion } from "framer-motion";
import ButtonLink from "../Button/ButtonLink";

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
            <ButtonLink href={path} label={label} currentPath={pathname} />
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
