import { Comment } from "@/models/recipe/comment";
import { FC } from "react";
import CommentC from "./Comment";

type Props = {
  comments: Comment[];
};

const Comments: FC<Props> = ({ comments }) => {
  return (
    <div className="space-y-3">
      {comments.map((comment, i) => (
        <CommentC key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
