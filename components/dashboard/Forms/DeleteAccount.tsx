import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { Form, Input } from "components/common/Forms";
import React from "react";

const DeleteAccount = () => {
  return (
    <CardBasic>
      <CardBasicTitle title="Eliminar cuenta" />
      <Form onSubmit={() => {}}>
        <CardBasicContent>
          <p>
            Eliminando tu cuenta, se eliminarán todos tus datos de forma
            permanente, incluidas todas aquellas publicaciones que hayas
            realizado.
          </p>
          <p>
            Si deseas continuar, por favor, escribe tu contraseña actual para
            confirmar tu solicitud.
          </p>
          <div className="grid md:grid-cols-3">
            <Input
              label="Contraseña"
              type="password"
              name="password"
              options={{
                required: {
                  value: true,
                  message: "Introduce tu contraseña",
                },
              }}
            />
          </div>
          <button className="btn btn-error normal-case" type="button">
            Eliminar cuenta
          </button>
        </CardBasicContent>
      </Form>
    </CardBasic>
  );
};

export default DeleteAccount;
