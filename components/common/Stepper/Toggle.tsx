import { FC, ReactNode } from "react";

type Props = {
  getToggleProps: any;
  children: ReactNode;
};

const Toggle: FC<Props> = ({ children, getToggleProps }) => {
  return (
    <button {...getToggleProps()} className="flex justify-between w-full">
      {children}
    </button>
  );
};

export default Toggle;
