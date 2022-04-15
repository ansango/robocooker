import { selectUser, signUp } from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

const SignUp: NextPage = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  useEffect(() => {
    if (user) replace("/dashboard/settings/");
  }, [user, replace]);
  const onSignUp = useCallback(
    ({
      username,
      email,
      password,
    }: {
      username: Username;
      email: Email;
      password: Password;
    }) => {
      dispatch(signUp({ username, email, password }));
    },
    [dispatch]
  );
  return (
    <GreyContainer>
      <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
        <Form onSubmit={onSignUp}>
          <div className="space-y-5">
            <h5 className="text-xl font-medium text-gray-900">
              Crea una cuenta
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
            <Input
              name="username"
              label="Nombre de usuario"
              type="text"
              options={{
                required: {
                  value: true,
                  message: "Introduce un nombre de usuario",
                },
                minLength: {
                  value: 4,
                  message:
                    "El nombre de usuario debe tener al menos 4 caracteres",
                },
              }}
            />
            <Input
              name="password"
              label="Contraseña"
              type="password"
              options={{
                required: { value: true, message: "Introduce una contraseña" },
                minLength: {
                  value: 8,
                  message:
                    "Tu contraseña tiene que tener al menos 8 caracteres",
                },
              }}
            />
            <Button label="Crear cuenta" fullWidth type="submit" />
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

export default SignUp;
