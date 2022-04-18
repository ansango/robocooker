import { RecipeDAO } from "@/models/recipe/recipe";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { File, Form, Input, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { useEffect, useState } from "react";
import Step from "components/common/Stepper/Step";

type Selector = {
  label: string;
  value: string;
};

const AddRecipeForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<Selector[]>([]);
  const [options, setOptions] = useState<any>([]);
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
  }, [dispatch, categories]);
  useEffect(() => {
    if (categories) {
      setOptions(
        categories.map(({ name }) => {
          return {
            label: name,
            value: name,
          };
        })
      );
    }
  }, [categories]);

  const onSubmit = (values: RecipeDAO) => {
    const data: RecipeDAO = {
      ...values,
      categories: selectedCategories.map(({ value }) => value),
    };
    console.log(data);
  };
  return (
    <Form onSubmit={onSubmit} className="mx-auto space-y-10 max-w-6xl">
      <div className="grid grid-cols-1 gap-10 mx-5 py-20">
        <Step
          title="Información básica"
          step={1}
          expanded
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
            options={options}
            value={selectedCategories}
            onChange={setSelectedCategories}
            labelledBy="Select"
            isCreatable
          />
          <Input name="servings" type="number" label="Raciones" />
          <Input name="duration" type="number" label="Tiempo (mins)" />
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
      <div className="flex justify-end">
        <button className="btn btn-primary normal-case" type="submit">
          Crear receta
        </button>
      </div>
    </Form>
  );
};

export default AddRecipeForm;
