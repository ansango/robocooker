import { useAppDispatch } from "lib/store/hooks";

import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import { useCallback } from "react";
import { recoveryPassword } from "@/store/features/user/thunks";
import ButtonLink from "components/common/Button/ButtonLink";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import AuthLayout from "components/layout/AuthLayout";
const Recovery: NextPage = () => {
  const dispatch = useAppDispatch();
  const onForget = useCallback(
    ({ email }: { email: Email }) => {
      dispatch(recoveryPassword({ email }));
    },
    [dispatch]
  );

  return (
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title="Recuperar contraseña" />
        <Form onSubmit={onForget}>
          <CardBasicContent>
            <Input
              name="email"
              label="Tu correo"
              type="email"
              options={{
                required: { value: true, message: "Introduce un email" },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Introduce un email valido",
                },
              }}
            />
            <button
              className="btn btn-primary normal-case w-full"
              type="submit"
            >
              Recuperar cuenta
            </button>

            <p className="text-sm space-x-2">
              <span>¿Ya tienes una cuenta?</span>
              <ButtonLink href="/signin" label="Inicia sesión" />
            </p>
          </CardBasicContent>
        </Form>
      </CardBasic>
    </AuthLayout>
  );
};

export default Recovery;
