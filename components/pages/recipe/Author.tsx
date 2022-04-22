import { RecipeDTO } from "@/models/recipe/recipe";
import { formatDate } from "@/utils/date";
import { Avatar } from "components/common/Avatar";
import  { FC } from "react";

type Props = {
  recipe: RecipeDTO;
};

const Author: FC<Props> = ({ recipe: { account, created } }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <Avatar size="xs" imgUrl={account.avatar} />
      </div>
      <div>
        <div className="font-semibold text-sm">@{account.username}</div>
        <div className="text-xs text-gray-700 dark:text-gray-500">
          {formatDate(created)}
        </div>
      </div>
    </div>
  );
};

export default Author;
