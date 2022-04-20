import { RecipeDTO } from "@/models/recipe/recipe";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import Step from "components/common/Stepper/Step";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import IngredientFields from "./IngredientFields";

type Props = {
  ingredients: RecipeDTO["ingredients"];
};

const IngredientsForm: FC<Props> = ({ ingredients }) => {
  const methods = useForm({
    defaultValues: {
      ingredients: ingredients.map(({ measure, name, quantity }) => {
        return {
          measure,
          name,
          quantity,
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
              title="Ingredientes"
              step={4}
              icon={{
                kind: "outline",
                type: "ClipboardListIcon",
              }}
            >
              <CardSlimContent>
                <IngredientFields />
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

export default IngredientsForm;
