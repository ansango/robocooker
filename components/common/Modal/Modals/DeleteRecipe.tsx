import { Form, Input } from "components/common/Forms";
import React, { FC } from "react";
import Modal from "../Modal";
import ModalAction from "../ModalAction";
import ModalBox from "../ModalBox";
import ModalContent from "../ModalContent";
import ModalTitle from "../ModalTitle";
import ModalTrigger from "../ModalOpen";
import { closeModal } from "../utils";

const DeleteRecipe: FC<{ id: string }> = ({ id }) => {
  const onSubmit = (values: any) => {
    console.log(values);
    closeModal(id);
  };
  return (
    <Modal id={id}>
      <ModalBox id={id}>
        <Form onSubmit={onSubmit}>
          <div className="hidden">
            <Input label="Contraseña" type="password" name="password" />
          </div>
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
