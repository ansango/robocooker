import { RecipeDAO } from "@/models/recipe/recipe";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { File, Input, Select, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { memo, useEffect, useState } from "react";
import Step from "components/common/Stepper/Step";
import { selectBlenders } from "@/store/features/blenders";
import { getBlenders } from "@/store/features/blenders/thunks";
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import { Icon } from "components/common/Icons";

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
            expanded
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
            icon={{
              kind: "outline",
              type: "CollectionIcon",
            }}
          >
            <Input name="name" label="Nombre" type="text" />
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

const Ingredients = () => {
  // TODO: VALIDATION
  const { control, register } = useFormContext();
  const { fields, prepend, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  return (
    <>
      <div className="flex items-center justify-end space-x-4">
        <h6 className="font-semibold">Añadir ingredientes</h6>
        <button
          className="btn btn-success normal-case btn-circle btn-md"
          type="button"
          onClick={() => {
            prepend({ name: "", units: "", quantity: "" });
          }}
        >
          <Icon icon="PlusIcon" kind="outline" className="w-5 h-5" />
        </button>
      </div>
      <ul className="space-y-5 w-full">
        {fields.map((item, index) => {
          return (
            <li key={item.id} className="grid grid-cols-12 gap-5">
              <div className="col-span-full sm:col-span-4 md:col-span-6 lg:col-span-7">
                <Input
                  name={`ingredients[${index}].name`}
                  type="text"
                  label="Ingrediente"
                />
              </div>

              <div className="col-span-full sm:col-span-3 md:col-span-2 lg:col-span-2">
                <Input
                  name={`ingredients[${index}].quantity`}
                  type="number"
                  label="Cantidad"
                />
              </div>
              <div className="col-span-full sm:col-span-3 md:col-span-2 lg:col-span-2">
                <Select
                  name={`ingredients[${index}].units`}
                  data={[
                    { label: "Unidad", value: "unit" },
                    { label: "Kg", value: "kg" },
                    { label: "Litro", value: "litre" },
                    { label: "Gramos", value: "grams" },
                    { label: "Mililitros", value: "ml" },
                  ]}
                  label="Unidad"
                />
              </div>
              <div className="flex items-end justify-end col-span-full sm:col-span-2 lg:col-span-1">
                <button
                  className="btn btn-error w-full sm:max-w-[3rem] sm:btn-circle"
                  type="button"
                  onClick={() => remove(index)}
                >
                  <Icon icon="XIcon" kind="outline" className="w-5 h-5" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const IngredientFields = memo(Ingredients);

export default AddRecipeForm;
