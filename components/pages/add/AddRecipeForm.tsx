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
  const { handleSubmit } = methods;
  const onSubmit = (values: any) => {
    const data: RecipeDAO = {
      ...values,
      categories: selectedCategories.map(({ value }) => value),
      blenders: selectedBlenders.map(({ value }) => value),
    };
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="mx-auto space-y-10 max-w-6xl px-2 md:px-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-10 pt-5">
          <Step
            title="Información básica"
            step={1}
            icon={{
              kind: "outline",
              type: "DocumentIcon",
            }}
          >
            <Input name="name" label="Nombre" type="text" />
            <TextArea name="description" label="Descripción" />
            <File name="image" />
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
              <Input name="servings" type="number" label="Raciones" />
              <Input name="duration" type="number" label="Tiempo (mins)" />
            </div>
            <IngredientFields />
          </Step>
          <Step
            title="Pasos"
            step={3}
            expanded
            icon={{
              kind: "outline",
              type: "CollectionIcon",
            }}
          >
            <StepsFields />
          </Step>
        </div>
        <div className="flex justify-end w-full p-5">
          <button className="btn btn-primary normal-case" type="submit">
            Crear receta
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddRecipeForm;
