import { FC } from "react";
import Link from "next/link";
type Props = {
  href: string;
  label: string;
};

const LinkE: FC<Props> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="btn btn-link normal-case btn-xs text-base dark:text-gray-400">
        {label}
      </a>
    </Link>
  );
};

export default LinkE;
