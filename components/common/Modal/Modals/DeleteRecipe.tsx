import { removeMyRecipe } from "@/store/features/recipes/myRecipes/thunks";
import { Form } from "components/common/Forms";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal";
import ModalAction from "../ModalAction";
import ModalBox from "../ModalBox";
import ModalContent from "../ModalContent";
import ModalTitle from "../ModalTitle";
import { closeModal } from "../utils";

const DeleteRecipe: FC<{ id: string; idRecipe: string }> = ({
  id,
  idRecipe,
}) => {
  const { push } = useRouter();
  const redirect = () => push("/dashboard/my-recipes");
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(
      removeMyRecipe({
        id: idRecipe,
        redirect,
      })
    );
    closeModal(id);
  };
  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <ModalTitle label="Estás seguro de borrar esta receta?" />
          <ModalContent>
            <p>
              Esta acción no se puede deshacer. Si borras esta receta, no podrás
              recuperarla.
            </p>
          </ModalContent>
          <ModalAction>
            <button className="btn btn-error normal-case" type="submit">
              Eliminar cuenta
            </button>
          </ModalAction>
        </Form>
      </ModalBox>
    </Modal>
  );
};

export default DeleteRecipe;
