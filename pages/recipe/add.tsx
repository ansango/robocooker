import { RecipeDAO } from "@/models/recipe/recipe";
import { File, Form, Input, TextArea } from "components/common/Forms";
import GenericHero from "components/common/Hero/GenericHero";
import { Icon } from "components/common/Icons";
import { NextPage } from "next";
import { FC, ReactNode } from "react";
import useCollapse from "react-collapsed";
import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";
const ArrowIcon: FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <span>
    {isExpanded ? (
      <Icon icon="ChevronUpIcon" kind="outline" className="w-5 h-5" />
    ) : (
      <Icon icon="ChevronDownIcon" kind="outline" className="w-5 h-5" />
    )}
  </span>
);

const StepOne = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  });
  return (
    <>
      <button {...getToggleProps()} className="flex justify-between w-full">
        <Icon icon="DocumentIcon" kind="outline" className="w-5 h-5" />
        <ArrowIcon isExpanded={isExpanded} />
      </button>
      <section {...getCollapseProps()}>
        <Input name="name" label="Nombre" type="text" />
      </section>
    </>
  );
};

const StepTwo = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  });
  return (
    <>
      <button {...getToggleProps()} className="flex justify-between w-full">
        <Icon icon="DocumentTextIcon" kind="outline" className="w-5 h-5" />
        <ArrowIcon isExpanded={isExpanded} />
      </button>
      <section {...getCollapseProps()}>
        <Input name="ole" label="Nombre" type="text" />
      </section>
    </>
  );
};

const StepThree = ({}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: true,
  });
  return (
    <>
      <button {...getToggleProps()} className="flex justify-between w-full">
        <Icon icon="CollectionIcon" kind="outline" className="w-5 h-5" />
        <ArrowIcon isExpanded={isExpanded} />
      </button>
      <section {...getCollapseProps()}>
        <Input name="ole" label="Nombre" type="text" />
      </section>
    </>
  );
};

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
      <div className="space-y-2">{children}</div>
    </section>
  );
};

const Step: FC<{
  expanded: boolean;
  step: number;
  children: ReactNode;
  icon: {
    type: keyof typeof SolidIcons | keyof typeof OutlineIcons;
    kind: "solid" | "outline";
  };
}> = ({ expanded, step, children, icon }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: expanded,
  });
  return (
    <>
      <Toggle getToggleProps={getToggleProps}>
        <Icon icon={icon.type} kind={icon.kind} className="w-5 h-5" />
        <ArrowIcon isExpanded={isExpanded} />
      </Toggle>
      <Collapse getCollapseProps={getCollapseProps}>{children}</Collapse>
    </>
  );
};

const AddRecipe: NextPage = () => {
  const onSubmit = (values: RecipeDAO) => {
    console.log(values);
  };
  return (
    <div>
      <GenericHero
        title="Crea una receta!"
        description="Hay muchas recetas que no sabes que hacer, pero no te preocupes, puedes crear tu propia receta y compartirla con la comunidad."
      />
      <div className="bg-base-200">
        <Form onSubmit={onSubmit} className="container mx-auto space-y-5">
          <Step
            step={1}
            expanded
            icon={{
              kind: "outline",
              type: "DocumentIcon",
            }}
          >
            <Input name="name" label="Nombre" type="text" />
          </Step>
          <Step
            step={2}
            expanded
            icon={{
              kind: "outline",
              type: "DocumentTextIcon",
            }}
          >
            <Input name="name" label="Nombre" type="text" />
          </Step>
          <Step
            step={3}
            expanded
            icon={{
              kind: "outline",
              type: "CollectionIcon",
            }}
          >
            <Input name="name" label="Nombre" type="text" />
          </Step>

          <button className="btn btn-primary normal-case w-full" type="submit">
            Crear receta
          </button>
        </Form>
      </div>
    </div>
  );
};

export default AddRecipe;
