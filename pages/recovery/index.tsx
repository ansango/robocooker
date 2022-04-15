import { recoveryPassword } from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch } from "@/lib-client/store/hooks";
import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
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
      <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
        <Form onSubmit={onForget}>
          <div className="space-y-5">
            <h5 className="text-xl font-medium text-gray-900">
              Recuperar cuenta
            </h5>
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

            <Button label="Recuperar cuenta" fullWidth type="submit" />
            <p className="text-sm font-medium text-gray-500">
              ¿Ya tienes una cuenta?
              <Link href="/signin">
                <a className="text-blue-700 hover:underline ml-1">
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
