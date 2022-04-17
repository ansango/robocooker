import { RecipeDTO } from "@/models/recipe/recipe";
import { Avatar } from "components/common/Avatar";
import { Icon } from "components/common/Icons";
import Image from "next/image";
import React, { FC } from "react";

const CardRecipe: FC<RecipeDTO> = ({
  name,
  description,
  img,
  categories,
  servings,
  duration,
  account: { avatar, username },
}) => {
  return (
    <div className="card compact bg-base-100 shadow-lg">
      <div className="rounded-lg pt-5 px-5">
        <figure className="w-full h-44 relative">
          <Image
            src={img}
            loading="lazy"
            alt="hero"
            layout="fill"
            className="object-center object-cover pointer-events-none rounded-lg"
          />
        </figure>
      </div>
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
    </div>
  );
};

export default CardRecipe;
