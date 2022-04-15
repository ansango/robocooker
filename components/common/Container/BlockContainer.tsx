import { FC, ReactNode } from "react";

import React from "react";
type Props = {
  children?: ReactNode;
};

const BlockContainer: FC<Props> = ({ children }) => {
  return (
    <div className="bg-gray-50 h-screen">
      <main className="container m-auto h-full w-full">{children}</main>
    </div>
  );
};

export default BlockContainer;
