
import { NextPage } from "next";
import AddRecipeForm from "components/pages/add/AddRecipeForm";
import GenericHero from "components/common/Hero/GenericHero";

const AddRecipe: NextPage = () => {
  return (
    <div>
      <GenericHero
        title="Crea una receta!"
        description="Hay muchas recetas que no sabes que hacer, pero no te preocupes, puedes crear tu propia receta y compartirla con la comunidad."
      />
      <div className="bg-base-200 py-10">
        <AddRecipeForm />
      </div>
    </div>
  );
};

export default AddRecipe;
