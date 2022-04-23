import { Icon } from "components/common/Icons";
import { FC } from "react";

type Props = {};

const Likes: FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <Icon icon="HeartIcon" kind="solid" className="w-7 h-7 text-secondary" />
      <span className="font-medium text-lg">64</span>
    </div>
  );
};

export default Likes;
