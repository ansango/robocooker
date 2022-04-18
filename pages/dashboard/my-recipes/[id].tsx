import { selectMyRecipes } from "@/store/features/recipes/myRecipes";
import { useAppSelector } from "@/store/hooks";

import { NextPage } from "next";
import { useRouter } from "next/router";

const Edit: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const recipe = useAppSelector(selectMyRecipes)?.find(({ _id }) => _id === id);

  return <div>{recipe?.name}</div>;
};

export default Edit;
