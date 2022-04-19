import { NextPage } from "next";
import AddRecipeForm from "components/pages/add/AddRecipeForm";
import GenericHero from "components/common/Hero/GenericHero";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/Container/ContainerDashboard";

const AddRecipe: NextPage = () => {
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="Crea una receta!" />

      <div className="bg-base-100 p-5 rounded-lg shadow-sm mx-auto max-w-4xl">
        <AddRecipeForm />
      </div>
    </ContainerDashboard>
  );
};

export default AddRecipe;
