import { CommentDAO } from "@/models/recipe/comment";
import { addComment } from "@/store/features/comments/thunk";
import { selectRecipeId } from "@/store/features/recipes/recipe";
import { selectUserUsername } from "@/store/features/user";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { Form, Input } from "components/common/Forms";
import { FC, useCallback } from "react";

type Props = {};

const CommentForm: FC = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUserUsername);
  const recipeId = useAppSelector(selectRecipeId);
  const onSubmit = useCallback(
    async ({ content }: any) => {
      if (username && recipeId) {
        const comment: CommentDAO = {
          author: username,
          content,
          recipeId,
          created: new Date(),
        };
        dispatch(addComment(comment));
      }
    },
    [dispatch, username, recipeId]
  );
  return (
    <Form
      onSubmit={onSubmit}
      className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5"
    >
      <Input
        type="text"
        name="content"
        placeholder="Escribe un comentario"
        options={{
          required: {
            value: true,
            message: "Escribe algo!",
          },
          minLength: {
            value: 5,
            message: "Mínimo 5 caracteres",
          },
          maxLength: {
            value: 200,
            message: "Máximo 200 caracteres",
          },
        }}
      />
      <div>
        <ButtonSubmit label="Enviar" isFull />
      </div>
    </Form>
  );
};

export default CommentForm;
