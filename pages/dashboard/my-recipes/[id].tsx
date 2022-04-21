import { selectMyRecipes } from "@/store/features/recipes/myRecipes";
import { getMyRecipes } from "@/store/features/recipes/myRecipes/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import BasicDataForm from "components/dashboard/pages/my-recipes/BasicDataForm";
import CategoriesForm from "components/dashboard/pages/my-recipes/CategoriesForm";
import ImageForm from "components/dashboard/pages/my-recipes/ImageForm";
import IngredientsForm from "components/dashboard/pages/my-recipes/IngredientsForm";
import StepsForm from "components/dashboard/pages/my-recipes/StepsForm";
import DashboardLayout from "components/layout/DashboardLayout";

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Edit: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const recipe = useAppSelector(selectMyRecipes)?.find(({ _id }) => _id === id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!recipe) {
      dispatch(getMyRecipes());
    }
  }, [dispatch, recipe]);
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
          <ImageForm img={recipe.img} />
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
