
import { NextPage } from "next";
import AddRecipeForm from "components/pages/add/AddRecipeForm";
import GenericHero from "components/common/Hero/GenericHero";
import { onGetAllBlendersService } from "@/services/blenders";
import { useEffect } from "react";

const AddRecipe: NextPage = () => {
  useEffect(() => {
    onGetAllBlendersService()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <GenericHero
        title="Crea una receta!"
        description="Hay muchas recetas que no sabes que hacer, pero no te preocupes, puedes crear tu propia receta y compartirla con la comunidad."
      />
      <div className="bg-base-200 py-10 px-5">
        <div className="bg-base-100 p-5 rounded-lg shadow-sm">
          <AddRecipeForm />
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
