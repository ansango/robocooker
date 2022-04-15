import { FC } from "react";

import React from "react";

const BlockContainer: FC = ({ children }) => {
  return (
    <div className="bg-gray-50 h-screen">
      <main className="container m-auto h-full w-full">{children}</main>
    </div>
  );
};

export default BlockContainer;
