import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { Form, Input } from "components/common/Forms";
import { FC } from "react";

type Props = {};

const CommentForm: FC = () => {
  return (
    <Form
      onSubmit={() => {}}
      className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5"
    >
      <Input
        type="text"
        name="comment"
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
