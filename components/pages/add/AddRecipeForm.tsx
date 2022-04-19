import { RecipeDAO } from "@/models/recipe/recipe";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { File, Input, Select, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { useEffect, useState } from "react";
import Step from "components/common/Stepper/Step";
import { selectBlenders } from "@/store/features/blenders";
import { getBlenders } from "@/store/features/blenders/thunks";
import { FormProvider, useForm } from "react-hook-form";
import IngredientFields from "./IngredientFields";
import StepsFields from "./StepsField";
import FileLarge from "components/common/Forms/FileLarge";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";

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

const AddRecipeForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<Selector[]>([]);
  const [selectedBlenders, setSelectedBlenders] = useState<Selector[]>([]);
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
      ingredients: [],
      steps: [],
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
      console.log(errors);
      return;
    }
  };
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
              <FileLarge
                name="avatar"
                options={{
                  required: { value: true, message: "Añade una foto" },
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
