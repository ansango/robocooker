import { selectRecipe } from "@/store/features/recipes/recipe";
import { getRecipe } from "@/store/features/recipes/recipe/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import GenericHero from "components/common/Hero/GenericHero";
import EditRecipeForm from "components/pages/edit/EditRecipeForm";

import { NextPage } from "next";

import { useRouter } from "next/router";
import { useEffect } from "react";

const Edit: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const dispatch = useAppDispatch();
  const recipe = useAppSelector(selectRecipe);

  useEffect(() => {
    if (!Array.isArray(id) && id) {
      dispatch(getRecipe(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      <GenericHero
        title="Editar receta"
        description="Te falta algo? Añade algo más a tu receta. Alguna foto, un ingrediente o una etiqueta."
      />
      <div className="bg-base-200 py-10 px-5">
        <div className="bg-base-100 p-5 rounded-lg shadow-sm mx-auto max-w-4xl">
          <EditRecipeForm recipe={recipe} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
