import { RecipeDTO } from "@/models/recipe/recipe";
import { Icon } from "components/common/Icons";
import React, { FC } from "react";
import Steps from "./Steps";
import Subtitle from "./Subtitle";

type Props = {
  steps: RecipeDTO["steps"];
};

const StepsBlock: FC<Props> = ({ steps }) => {
  return (
    <article>
      <div className="p-5 rounded-lg space-y-3 bg-base-200">
        <div className="flex items-center space-x-2 px-3">
          <Subtitle text="Preparación" />
          <Icon
            icon="BeakerIcon"
            kind="outline"
            className="w-6 h-6 text-accent-focus"
          />
        </div>
        <Steps steps={steps} />
      </div>
    </article>
  );
};

export default StepsBlock;
