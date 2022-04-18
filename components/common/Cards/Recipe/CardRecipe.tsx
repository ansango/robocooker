import { RecipeDTO } from "@/models/recipe/recipe";
import React, { FC } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import { motion } from "framer-motion";
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
