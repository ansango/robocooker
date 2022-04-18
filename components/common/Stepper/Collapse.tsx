import { FC, ReactNode } from "react";

const Collapse: FC<{
  getCollapseProps: any;
  children: ReactNode;
}> = ({ children, getCollapseProps }) => {
  return (
    <section {...getCollapseProps()}>
      <div className="space-y-2 px-5">{children}</div>
    </section>
  );
};

export default Collapse;
