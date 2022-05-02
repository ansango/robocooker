import {
  selectLastRecipes,
  selectLastRecipesStatus,
} from "@/store/features/recipes/lastRecipes";
import { getLastRecipes } from "@/store/features/recipes/lastRecipes/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect } from "react";
import CardRecipe from "../../../common/Cards/Recipe/CardRecipe";

const ContentLastRecipes = () => {
  const dispatch = useAppDispatch();
  const lastRecipes = useAppSelector(selectLastRecipes);
  const loading = useAppSelector(selectLastRecipesStatus) === "loading";
  useEffect(() => {
    dispatch(getLastRecipes(12));
  }, [dispatch]);
  return (
    <div>
      {!loading && lastRecipes && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {lastRecipes.map((recipe) => (
            <CardRecipe key={recipe._id} {...recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentLastRecipes;
