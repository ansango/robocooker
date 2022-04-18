import { FC, ReactNode } from "react";

type Props = {
  getCollapseProps: any;
  children: ReactNode;
};

const Collapse: FC<Props> = ({ children, getCollapseProps }) => {
  return (
    <section {...getCollapseProps()}>
      <div className="space-y-2 px-5">{children}</div>
    </section>
  );
};

export default Collapse;
