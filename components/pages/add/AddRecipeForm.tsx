import { RecipeDAO } from "@/models/recipe/recipe";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Input, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { useCallback, useEffect, useState } from "react";
import Step from "components/common/Stepper/Step";
import { selectBlenders } from "@/store/features/blenders";
import { getBlenders } from "@/store/features/blenders/thunks";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import IngredientFields from "./IngredientFields";
import StepsFields from "./StepsField";
import FileLarge from "components/common/Forms/FileLarge";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import Error from "components/common/Forms/Error";
import { getLastRecipes } from "@/store/features/recipes/lastRecipes/thunks";
import { addMyRecipe } from "@/store/features/recipes/myRecipes/thunks";
import { selectAccount } from "@/store/features/account";

type Selector = {
  label: any;
  value: any;
};

const AddRecipeForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<Selector[]>([]);
  const [selectedBlenders, setSelectedBlenders] = useState<Selector[]>([]);
  const [cats, setCat] = useState<any>([]);
  const [blends, setBlend] = useState<any>([]);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const blenders = useAppSelector(selectBlenders);
  const accountId = useAppSelector(selectAccount)?._id;

  const methods = useForm({
    defaultValues: {
      ingredients: [],
      steps: [],
    },
  });
  const { handleSubmit } = methods;
  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
    if (!blenders) {
      dispatch(getBlenders());
    }
  }, [dispatch, categories, blenders]);
  useEffect(() => {
    if (categories) {
      setCat(
        categories.map(({ name }) => {
          return {
            label: name,
            value: name,
          };
        })
      );
    }
    if (blenders) {
      setBlend(
        blenders.map(({ name }) => {
          return {
            label: name,
            value: name,
          };
        })
      );
    }
  }, [categories, blenders]);

  const onSubmit = useCallback(
    async (values: any) => {
      if (!accountId) return;
      const recipe: RecipeDAO = {
        name: values.name,
        description: values.description,
        accountId,
        duration: values.duration,
        servings: values.servings,
        categories: selectedCategories.map(({ value }) => value),
        blenders: selectedBlenders.map(({ value }) => value),
        ingredients: values.ingredients,
        steps: values.steps,
      };

      dispatch(addMyRecipe({ recipe }));
    },
    [dispatch, accountId, selectedCategories, selectedBlenders]
  );

  return (
    <FormProvider {...methods}>
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-10">
          <Step
            title="Información básica"
            step={1}
            icon={{
              kind: "outline",
              type: "DocumentIcon",
            }}
          >
            <CardBasicContent>
              <Input
                name="name"
                label="Nombre"
                type="text"
                options={{
                  required: { value: true, message: "Introduce un nombre" },
                }}
              />
              <TextArea
                name="description"
                label="Descripción"
                options={{
                  required: {
                    value: true,
                    message: "Introduce una descripción",
                  },
                }}
              />
            </CardBasicContent>
          </Step>
          <Step
            title="Categorías"
            step={2}
            icon={{
              kind: "outline",
              type: "DocumentTextIcon",
            }}
          >
            <CardBasicContent>
              <MultiSelect
                label="Categorías"
                options={cats}
                value={selectedCategories}
                onChange={setSelectedCategories}
                labelledBy="Select"
              />

              <MultiSelect
                label="Robots de cocina"
                options={blends}
                value={selectedBlenders}
                onChange={setSelectedBlenders}
                labelledBy="Select"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  name="servings"
                  type="number"
                  label="Raciones"
                  options={{
                    required: { value: true, message: "Introduce un número" },
                  }}
                />
                <Input
                  name="duration"
                  type="number"
                  label="Tiempo (mins)"
                  options={{
                    required: { value: true, message: "Introduce un número" },
                  }}
                />
              </div>
              <IngredientFields />
            </CardBasicContent>
          </Step>
          <Step
            title="Pasos"
            step={3}
            icon={{
              kind: "outline",
              type: "CollectionIcon",
            }}
          >
            <CardBasicContent>
              <StepsFields />
            </CardBasicContent>
          </Step>
        </div>
        <div className="flex justify-end w-full px-5">
          <button className="btn btn-primary normal-case" type="submit">
            Crear receta
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddRecipeForm;
