import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContainerDashboard: FC<Props> = ({ children }) => {
  return <div className="p-5 mx-auto max-w-4xl space-y-5">{children}</div>;
};

export default ContainerDashboard;
