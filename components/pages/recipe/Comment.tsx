import { Comment } from "@/models/recipe/comment";
import { formatDate } from "@/utils/date";
import { Avatar } from "components/common/Avatar";
import { FC } from "react";

type Props = {
  comment: Comment;
};

const CommentC: FC<Props> = ({ comment: { author, content, created } }) => {
  return (
    <div className="space-y-3">
      <div className="sm:flex sm:items-center sm:justify-between md:space-x-2">
        <div className="space-x-2">
          <Avatar size="xs" />
          <span className="font-medium">@{author}</span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-600">
          {formatDate(created)}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-500">{content}</p>
      <hr className="bg-gray-100"></hr>
    </div>
  );
};

export default CommentC;
