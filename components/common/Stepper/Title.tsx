import { ReactNode } from "react";

const Title = ({ children, title }: { children: ReactNode; title: string }) => (
  <h5 className="font-semibold flex items-center space-x-2">
    {children} <span>{title}</span>
  </h5>
);

export default Title;
