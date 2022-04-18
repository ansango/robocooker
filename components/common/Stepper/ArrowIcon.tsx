import { FC } from "react";
import { Icon } from "../Icons";

type Props = { isExpanded: boolean };

const ArrowIcon: FC<Props> = ({ isExpanded }) => (
  <span>
    {isExpanded ? (
      <Icon icon="ChevronUpIcon" kind="outline" className="w-5 h-5" />
    ) : (
      <Icon icon="ChevronDownIcon" kind="outline" className="w-5 h-5" />
    )}
  </span>
);

export default ArrowIcon;
