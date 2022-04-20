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
            <Input
              name="name"
              label="Nombre"
              type="text"
              options={{
                required: { value: true, message: "Introduce un nombre" },
              }}
              {...(recipe && { defaultValue: recipe.name })}
            />
            <TextArea
              name="description"
              label="Descripción"
              options={{
                required: { value: true, message: "Introduce una descripción" },
              }}
              {...(recipe && { defaultValue: recipe.description })}
            />
            <FileLarge
              name="image"
              options={{
                required: { value: true, message: "Añade una foto" },
              }}
              // TODO: CAMBIAR POR AVATAR ?
            />
          </Step>
          <Step
            title="Categorías"
            step={2}
            icon={{
              kind: "outline",
              type: "DocumentTextIcon",
            }}
          >
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
            </div>
            <IngredientFields />
          </Step>
          <Step
            title="Pasos"
            step={3}
            icon={{
              kind: "outline",
              type: "CollectionIcon",
            }}
          >
            <StepsFields />
          </Step>
        </div>
        <div className="flex justify-end w-full px-5">
          <button className="btn btn-primary normal-case" type="submit">
            Guardar cambios
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditRecipeForm;
