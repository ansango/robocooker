import { RecipeDTO } from "@/models/recipe/recipe";
import React, { FC } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import { useRouter } from "next/router";
const CardRecipe: FC<RecipeDTO> = ({
  name,
  description,
  img,
  categories,
  servings,
  duration,
  _id,
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
  const { push } = useRouter();
  return (
    <div
      className="card compact bg-base-100 shadow-lg"
      onClick={() => push(`/recipe/${_id}`)}
    >
      <CardHeader img={img} />
      <CardBody {...body} />
    </div>
  );
};

export default CardRecipe;
