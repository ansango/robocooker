import { Avatar } from "components/common/Avatar";
import { Icon } from "components/common/Icons";
import React, { FC } from "react";

type Props = {
  name: string;
  description: string;
  categories: string[];
  servings: number;
  duration: number;
  avatar: string;
  username: string;
};

const CardBody: FC<Props> = ({
  categories,
  name,
  description,
  avatar,
  username,
  duration,
  servings,
}) => {
  return (
    <div className="card-body space-y-1">
      <div className="justify-end">
        {categories.slice(0, 3).map((category, index) => (
          <div key={index} className="badge capitalize badge-accent">
            {category}
          </div>
        ))}
      </div>
      <h4 className="card-title">{name}</h4>
      <p className="line-clamp-3">{description}</p>
      <div className="card-actions justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Avatar size="xs" imgUrl={avatar} />
          <span className="text-sm font-medium">@{username}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="badge space-x-2">
            <Icon icon="ClockIcon" kind="solid" className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="badge space-x-2">
            <Icon icon="UserGroupIcon" kind="solid" className="w-4 h-4" />
            <span>{servings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
