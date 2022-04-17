import { RecipeDTO } from "@/models/recipe/recipe";
import { Avatar } from "components/common/Avatar";
import { Icon } from "components/common/Icons";
import Image from "next/image";
import React, { FC } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

const CardRecipe: FC<RecipeDTO> = ({
  name,
  description,
  img,
  categories,
  servings,
  duration,
  account: { avatar, username },
}) => {
  const body = {
    name,
    description,
    categories,
    servings,
    duration,
    avatar,
    username,
  };
  return (
    <div className="card compact bg-base-100 shadow-lg">
      <CardHeader img={img} />
      <CardBody {...body} />
    </div>
  );
};

export default CardRecipe;
