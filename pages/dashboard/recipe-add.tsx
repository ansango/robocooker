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

        <div className="bg-base-100 p-5 rounded-lg shadow-sm mx-auto max-w-4xl">
          <AddRecipeForm />
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default AddRecipe;
