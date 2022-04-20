import { selectMyRecipes } from "@/store/features/recipes/myRecipes";
import { useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import BasicDataForm from "components/pages/edit/Forms/BasicDataForm";
import CategoriesForm from "components/pages/edit/Forms/CategoriesForm";
import ImageForm from "components/pages/edit/Forms/ImageForm";
import IngredientsForm from "components/pages/edit/Forms/IngredientsForm";
import StepsForm from "components/pages/edit/Forms/StepsForm";
import { NextPage } from "next";
import { useRouter } from "next/router";

const Edit: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const recipe = useAppSelector(selectMyRecipes)?.find(({ _id }) => _id === id);
  // !recipe fetch recipe from store
  if (!recipe) return null;
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Editar receta" />
        <Breadcrumb>
          <BreadcrumbLink
            href="/dashboard/my-recipes"
            label="Mis recetas"
            icon={{
              icon: "BookOpenIcon",
              kind: "outline",
            }}
          />
          <BreadcrumbNoLink
            label={recipe.name}
            icon={{
              icon: "ClipboardIcon",
              kind: "outline",
            }}
          />
        </Breadcrumb>
        <div className="grid gap-5 grid-cols-12">
          <ImageForm />
          <BasicDataForm recipe={recipe} />
          <CategoriesForm recipe={recipe} />
          <IngredientsForm ingredients={recipe.ingredients} />
          <StepsForm steps={recipe.steps} />
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Edit;
