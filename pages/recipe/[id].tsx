import { selectRecipe } from "@/store/features/recipes/recipe";
import { getRecipe } from "@/store/features/recipes/recipe/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";

import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Recipe: NextPage = () => {
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
      {recipe?.name}
      <Link href={`/recipe-edit/${id}`}>
        <a className="btn btn-ghost btn-circle">
          <Icon icon="DotsHorizontalIcon" kind="outline" className="w-5 h-5" />
        </a>
      </Link>
    </div>
  );
};

export default Recipe;
