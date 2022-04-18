import { FC, ReactNode } from "react";

const Toggle: FC<{
  getToggleProps: any;
  children: ReactNode;
}> = ({ children, getToggleProps }) => {
  return (
    <button {...getToggleProps()} className="flex justify-between w-full">
      {children}
    </button>
  );
};

export default Toggle;
