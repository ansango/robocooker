import { RecipeDTO } from "@/models/recipe/recipe";
import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonLink from "components/common/Button/ButtonLink";
import { Icon } from "components/common/Icons";

import { FC } from "react";
import StepC from "./Step";

type Props = {
  steps: RecipeDTO["steps"];
};

const Steps: FC<Props> = ({ steps }) => {
  const user = useAppSelector(selectUser);
  return (
    <>
      {user && (
        <ul className="space-y-5">
          {steps.map((step, index) => (
            <StepC key={index} step={step} />
          ))}
        </ul>
      )}
      {!user && (
        <div className="space-y-5 px-3 flex justify-end items-end space-x-2">
          <Icon icon="LoginIcon" kind="outline" className="text-primary w-5 h-5 mb-0.5" />
          <ButtonLink href="/sigin" label="Inicia session para ver los pasos" />
        </div>
      )}
    </>
  );
};

export default Steps;
