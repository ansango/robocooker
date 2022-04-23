import { onLikeRecipeService } from "@/services/account";
import { likeRecipe } from "@/store/features/recipes/recipe";
import { useAppDispatch } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import React, { FC, useCallback, useState } from "react";

type Props = {
  recipeId: string;
};

const ActionLike: FC<Props> = ({ recipeId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const onLike = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await onLikeRecipeService(recipeId);
      dispatch(likeRecipe(response.id));
    } catch (error) {}
    setIsLoading(false);
  }, [recipeId, dispatch]);

  return (
    <button
      className="btn btn-circle btn-ghost text-secondary"
      onClick={onLike}
    >
      {!isLoading && (
        <Icon icon="HeartIcon" kind="outline" className="w-6 h-6" />
      )}
      {isLoading && (
        <svg
          className="animate-spin h-6 w-6 text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-0"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-100"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
    </button>
  );
};

export default ActionLike;
