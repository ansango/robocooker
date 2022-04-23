import {
  selectAccount,
  selectAccountId,
  selectFavorites,
} from "@/store/features/account/account";
import { selectRecipe } from "@/store/features/recipes/recipe";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import { FC } from "react";
import ActionLike from "./ActionLike";

type Props = {};

const SocialActions: FC = () => {
  const accountId = useAppSelector(selectAccountId);
  const favorites = useAppSelector(selectFavorites);
  const recipe = useAppSelector(selectRecipe);
  const isLiked = favorites.includes(recipe?._id);
  if (!recipe || !accountId) return null;
  return (
    <div className="space-x-1">
      {!isLiked && <ActionLike recipeId={recipe._id} accountId={accountId} />}
      <button className="btn btn-circle btn-ghost">
        <Icon
          icon="BookmarkIcon"
          kind="outline"
          className="w-6 h-6 text-accent-focus"
        />
      </button>
      <button className="btn btn-circle btn-ghost">
        <Icon icon="ShareIcon" kind="outline" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SocialActions;
