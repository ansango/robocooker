import { useAppDispatch } from "lib/store/hooks";
import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
import { recoveryPassword } from "@/store/features/user/thunks";
const Recovery: NextPage = () => {
  const dispatch = useAppDispatch();
  const onForget = useCallback(
    ({ email }: { email: Email }) => {
      dispatch(recoveryPassword({ email }));
    },
    [dispatch]
  );

  return (
    <GreyContainer>
      <div className="card shadow-md bg-base-100 max-w-md w-full">
        <Form onSubmit={onForget} className="card-body">
          <h5 className="card-title">Recuperar cuenta</h5>
          <div className="space-y-4">
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

            <p className="text-sm">
              ¿Ya tienes una cuenta?
              <Link href="/signin">
                <a className="btn btn-link normal-case text-sm p-0 ml-1">
                  Inicia sesión
                </a>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </GreyContainer>
  );
};

export default Recovery;
