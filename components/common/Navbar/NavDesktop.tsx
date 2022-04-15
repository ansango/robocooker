import { routeActive } from "@/lib-utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { routes } from "./routes";

const NavDesktop = () => {
  const { pathname } = useRouter();
  return (
    <ul className="hidden w-full md:flex md:w-auto ml-3">
      {routes.map(({ label, path }) => {
        return (
          <li key={path}>
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
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
