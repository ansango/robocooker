import { RecipeDTO } from "@/models/recipe/recipe";
import React, { FC } from "react";

const CardRecipe: FC<RecipeDTO> = ({ name, description, img, categories }) => {
  return (
    <div className="card compact bg-base-100 shadow-lg">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {categories.slice(0, 3).map((category, index) => (
            <div key={index} className="badge badge-outline capitalize">
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardRecipe;
