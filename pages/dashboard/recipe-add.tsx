import { NextPage } from "next";
import AddRecipeForm from "components/pages/add/AddRecipeForm";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";

const AddRecipe: NextPage = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Crea una receta!" />

        <AddRecipeForm />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default AddRecipe;
