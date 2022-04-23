import { Comment } from "@/models/recipe/comment";
import { Icon } from "components/common/Icons";
import React from "react";
import Comments from "./Comments";
import ContainerSection from "./ContainerSection";
import Subtitle from "./Subtitle";

const comments: Comment[] = [
  {
    _id: "",
    author: "anibalsantos",
    content:
      "Lores ipsum dolor sit amet consectetur adipisicing elit. Qui, quis.",
    created: new Date(),
  },
  {
    _id: "",
    author: "anibalsantos",
    content:
      "Lores ipsum dolor sit amet consectetur adipisicing elit. Qui, quis.",
    created: new Date(),
  },
  {
    _id: "",
    author: "anibalsantos",
    content:
      "Lores ipsum dolor sit amet consectetur adipisicing elit. Qui, quis.",
    created: new Date(),
  },
  {
    _id: "",
    author: "anibalsantos",
    content:
      "Lores ipsum dolor sit amet consectetur adipisicing elit. Qui, quis.",
    created: new Date(),
  },
  {
    _id: "",
    author: "anibalsantos",
    content:
      "Lores ipsum dolor sit amet consectetur adipisicing elit. Qui, quis.",
    created: new Date(),
  },
  {
    _id: "",
    author: "anibalsantos",
    content:
      "Lores ipsum dolor sit amet consectetur adipisicing elit. Qui, quis.",
    created: new Date(),
  },
];
const CommentsUserSection = () => {
  return (
    <ContainerSection>
      <article className="space-y-5">
        <div className="flex items-center space-x-2">
          <Subtitle text="Comentarios" />
          <Icon
            icon="AnnotationIcon"
            kind="outline"
            className=" w-6 h-6 text-accent-focus"
          />
        </div>
        <Comments comments={comments} />
      </article>
    </ContainerSection>
  );
};

export default CommentsUserSection;
