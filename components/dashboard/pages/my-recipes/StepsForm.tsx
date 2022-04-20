import { RecipeDTO } from "@/models/recipe/recipe";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import Step from "components/common/Stepper/Step";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import StepsFields from "./StepsField";

type Props = {
  steps: RecipeDTO["steps"];
};

const StepsForm: FC<Props> = ({ steps }) => {
  const methods = useForm({
    defaultValues: {
      steps: steps.map(({ description, position }) => {
        return {
          description,
          position,
        };
      }),
    },
  });
  const { handleSubmit } = methods;
  return (
    <div className="col-span-full 2xl:col-span-6">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(() => {})}>
          <CardSlim>
            <Step
              title="Preparación"
              step={5}
              icon={{
                kind: "outline",
                type: "CollectionIcon",
              }}
            >
              <CardSlimContent>
                <StepsFields />
              </CardSlimContent>
              <CardSlimAction>
                <button className="btn btn-primary normal-case" type="submit">
                  Guardar
                </button>
              </CardSlimAction>
            </Step>
          </CardSlim>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepsForm;
