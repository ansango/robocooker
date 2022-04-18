import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const StepContainer: FC<Props> = ({ children }) => {
  return <div className="space-y-2 px-2 md:px-5">{children}</div>;
};

export default StepContainer;
