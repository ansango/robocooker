import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const GreyContainer: FC<Props> = ({ children }) => {
  return (
    <div className="h-full">
      <div className="container m-auto h-full w-full px-5 py-20">
        <div className="flex justify-center flex-col items-center h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GreyContainer;
