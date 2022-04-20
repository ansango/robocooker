import { RecipeDAO, RecipeDTO } from "@/models/recipe/recipe";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Input, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { FC, useEffect, useState } from "react";
import Step from "components/common/Stepper/Step";
import { selectBlenders } from "@/store/features/blenders";
import { getBlenders } from "@/store/features/blenders/thunks";
import { FormProvider, useForm } from "react-hook-form";
import IngredientFields from "./IngredientFields";
import StepsFields from "./StepsField";
import FileLarge from "components/common/Forms/FileLarge";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";

type Selector = {
  label: any;
  value: any;
};

const validateData = (data: RecipeDAO) => {
  const errors: {
    [key: string]: string;
  } = {};

  if (data.categories.length === 0)
    errors.category = "La categoría es requerida";
  if (data.ingredients.length === 0)
    errors.ingredients = "Los ingredientes son requeridos";
  if (data.steps.length === 0) errors.steps = "Los pasos son requeridos";
  if (data.blenders.length === 0) errors.blender = "El blender es requerido";

  return errors;
};

type Props = {
  recipe: RecipeDTO | null;
};

const EditRecipeForm: FC<Props> = ({ recipe }) => {
  const categoriesSelected =
    recipe?.categories.map((category) => {
      return {
        label: category,
        value: category,
      };
    }) || [];
  const blendersSelected =
    recipe?.blenders.map((blender) => {
      return {
        label: blender,
        value: blender,
      };
    }) || [];
  const [selectedCategories, setSelectedCategories] =
    useState<Selector[]>(categoriesSelected);
  const [selectedBlenders, setSelectedBlenders] =
    useState<Selector[]>(blendersSelected);
  const [cats, setCat] = useState<any>([]);
  const [blends, setBlend] = useState<any>([]);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const blenders = useAppSelector(selectBlenders);
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
  const methods = useForm({
    defaultValues: {
      ingredients: recipe?.ingredients.map((ingredient) => {
        return {
          name: ingredient.name,
          quantity: ingredient.quantity,
          measure: ingredient.measure,
        };
      }),
      steps: recipe?.steps.map((step) => {
        return {
          description: step.description,
          position: step.position,
        };
      }),
    },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (values: any) => {
    const data: RecipeDAO = {
      ...values,
      categories: selectedCategories.map(({ value }) => value),
      blenders: selectedBlenders.map(({ value }) => value),
      ingredients: values.ingredients,
      steps: values.steps,
    };
    const errors = validateData(data);
    if (Object.keys(errors).length > 0) {
      return;
    }
  };
  if (!recipe) return null;
  return (
    <FormProvider {...methods}>
      <form
        className="grid gap-5 grid-cols-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-full md:col-span-6 lg:col-span-6 2xl:col-span-3 flex flex-col justify-end">
          <CardSlim>
            <Step
              title="Foto de la receta"
              step={1}
              icon={{
                kind: "outline",
                type: "CameraIcon",
              }}
            >
              <CardSlimContent>
                <FileLarge
                  name="image"
                  options={{
                    required: { value: true, message: "Añade una foto" },
                  }}
                  // TODO: CAMBIAR POR AVATAR ?
                />
                <CardSlimAction>
                  <button className="btn btn-primary normal-case" type="submit">
                    Guardar
                  </button>
                </CardSlimAction>
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>
        <div className="col-span-full md:col-span-6 lg:col-span-6 2xl:col-span-3 flex flex-col justify-end">
          <CardSlim>
            <Step
              title="Información básica"
              step={2}
              icon={{
                kind: "outline",
                type: "DocumentIcon",
              }}
            >
              <CardSlimContent>
                <Input
                  name="name"
                  label="Nombre"
                  type="text"
                  options={{
                    required: { value: true, message: "Introduce un nombre" },
                  }}
                  {...(recipe && { defaultValue: recipe.name })}
                />
                <Input
                  name="servings"
                  type="number"
                  label="Raciones"
                  options={{
                    required: { value: true, message: "Introduce un número" },
                  }}
                  {...(recipe && { defaultValue: recipe.servings })}
                />
                <Input
                  name="duration"
                  type="number"
                  label="Tiempo (mins)"
                  options={{
                    required: { value: true, message: "Introduce un número" },
                  }}
                  {...(recipe && { defaultValue: recipe.duration })}
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
                  {...(recipe && { defaultValue: recipe.description })}
                />

                <CardSlimAction>
                  <button className="btn btn-primary normal-case" type="submit">
                    Guardar
                  </button>
                </CardSlimAction>
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>

        <div className="col-span-full 2xl:col-span-6 flex flex-col justify-end">
          <CardSlim>
            <Step
              title="Categorías"
              step={3}
              icon={{
                kind: "outline",
                type: "DocumentTextIcon",
              }}
            >
              <CardSlimContent>
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
                <CardSlimAction>
                  <button className="btn btn-primary normal-case" type="submit">
                    Guardar
                  </button>
                </CardSlimAction>
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>
        <div className="col-span-full 2xl:col-span-6">
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
                <CardSlimAction>
                  <button className="btn btn-primary normal-case" type="submit">
                    Guardar
                  </button>
                </CardSlimAction>
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>
        <div className="col-span-full 2xl:col-span-6">
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
                <CardSlimAction>
                  <button className="btn btn-primary normal-case" type="submit">
                    Guardar
                  </button>
                </CardSlimAction>
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditRecipeForm;
