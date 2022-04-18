import { RecipeDAO } from "@/models/recipe/recipe";
import {
  Checkbox,
  File,
  Form,
  Input,
  Select,
  TextArea,
} from "components/common/Forms";
import GenericHero from "components/common/Hero/GenericHero";
import { Icon } from "components/common/Icons";
import { NextPage } from "next";
import { FC, ReactNode, useEffect, useState } from "react";
import useCollapse from "react-collapsed";
import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectCategories } from "@/store/features/categories";
import { getCategories } from "@/store/features/categories/thunks";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { Category } from "@/models/recipe/category";
const ArrowIcon: FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <span>
    {isExpanded ? (
      <Icon icon="ChevronUpIcon" kind="outline" className="w-5 h-5" />
    ) : (
      <Icon icon="ChevronDownIcon" kind="outline" className="w-5 h-5" />
    )}
  </span>
);

const Title = ({ children, title }: { children: ReactNode; title: string }) => (
  <h5 className="font-semibold flex items-center space-x-2">
    {children} <span>{title}</span>
  </h5>
);

const Toggle: FC<{
  getToggleProps: any;
  children: ReactNode;
}> = ({ children, getToggleProps }) => {
  return (
    <button {...getToggleProps()} className="flex justify-between w-full">
      {children}
    </button>
  );
};

const Collapse: FC<{
  getCollapseProps: any;
  children: ReactNode;
}> = ({ children, getCollapseProps }) => {
  return (
    <section {...getCollapseProps()}>
      <div className="space-y-2 px-5">{children}</div>
    </section>
  );
};

const Step: FC<{
  expanded?: boolean;
  step: number;
  children: ReactNode;
  title: string;
  icon: {
    type: keyof typeof SolidIcons | keyof typeof OutlineIcons;
    kind: "solid" | "outline";
  };
}> = ({ expanded = false, step, children, icon, title }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: expanded,
  });
  return (
    <div>
      <Toggle getToggleProps={getToggleProps}>
        <Title title={title}>
          <Icon icon={icon.type} kind={icon.kind} className="w-5 h-5" />
        </Title>

        <ArrowIcon isExpanded={isExpanded} />
      </Toggle>
      <Collapse getCollapseProps={getCollapseProps}>{children}</Collapse>
    </div>
  );
};

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const AddRecipe: NextPage = () => {
  const [selected, setSelected] = useState<any>([]);
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
        categories.map((category) => {
          return {
            label: category.name,
            value: category.name,
          };
        })
      );
    }
  }, [categories]);

  const onSubmit = (values: RecipeDAO) => {
    console.log(values);
    console.log(selected);
  };
  return (
    <div>
      <GenericHero
        title="Crea una receta!"
        description="Hay muchas recetas que no sabes que hacer, pero no te preocupes, puedes crear tu propia receta y compartirla con la comunidad."
      />
      <div className="bg-base-200 py-10">
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
                value={selected}
                onChange={setSelected}
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
      </div>
    </div>
  );
};

export default AddRecipe;
