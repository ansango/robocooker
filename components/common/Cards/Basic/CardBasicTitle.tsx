import { routeActive } from "@/utils/router";
import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
};

const CardBasicTitle: FC<Props> = ({ title }) => {
  return <h5 className="card-title">{title}</h5>;
};

export default CardBasicTitle;
