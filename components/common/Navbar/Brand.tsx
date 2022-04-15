import Link from "next/link";
import { FC } from "react";
import { Logo } from "../Icons";

const Brand: FC = () => {
  return (
    <Link href="/" passHref>
      <button className="btn btn-ghost btn-circle">
        <Logo className="w-5 h-5 fill-primary" />
      </button>
    </Link>
  );
};

export default Brand;
