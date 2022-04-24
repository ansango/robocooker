import { selectComments } from "@/store/features/comments";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import CommentC from "./Comment";

type Props = {};

const Comments: FC<Props> = () => {
  const comments = useAppSelector(selectComments);

  return (
    <div className="space-y-4">
      {comments?.map((comment, i) => (
        <CommentC key={i} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
