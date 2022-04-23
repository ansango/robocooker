import { Icon } from "components/common/Icons";
import { FC } from "react";
import ActionLike from "./ActionLike";

const SocialActions: FC = () => {
  return (
    <div className="space-x-1">
      <ActionLike />
      <button className="btn btn-circle btn-ghost">
        <Icon
          icon="BookmarkIcon"
          kind="outline"
          className="w-6 h-6 text-accent-focus"
        />
      </button>
      <button className="btn btn-circle btn-ghost">
        <Icon icon="ShareIcon" kind="outline" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialActions;
