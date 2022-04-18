import { selectMyRecipes } from "@/store/features/recipes/myRecipes";
import { selectRecipe } from "@/store/features/recipes/recipe";
import { getRecipe } from "@/store/features/recipes/recipe/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Recipe: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const dispatch = useAppDispatch();
  const recipe = useAppSelector(selectRecipe);

  useEffect(() => {
    if (!recipe && !Array.isArray(id) && id) {
      dispatch(getRecipe(id));
    }
  }, [id, dispatch, recipe]);

  return <div>{recipe?.name}</div>;
};

export default Recipe;
