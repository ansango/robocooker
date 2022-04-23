import { selectAccount } from "@/store/features/account/account";
import { selectRecipe } from "@/store/features/recipes/recipe";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import { FC } from "react";
import ActionLike from "./ActionLike";

type Props = {};

const SocialActions: FC = () => {
  const account = useAppSelector(selectAccount);
  const recipe = useAppSelector(selectRecipe);
  const isLiked = account?.favorites.includes(recipe?._id);
  if (!account || !recipe) return null;
  return (
    <div className="space-x-1">
      {!isLiked && <ActionLike recipeId={recipe._id} />}
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
