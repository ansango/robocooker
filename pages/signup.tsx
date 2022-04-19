import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { selectUser } from "@/store/features/user";
import { signUp } from "@/store/features/user/thunks";
import ButtonLink from "components/common/Button/ButtonLink";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import AuthLayout from "components/layout/AuthLayout";

const SignUp: NextPage = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  useEffect(() => {
    if (user) replace("/dashboard");
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
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title="Crea una cuenta" />
        <Form onSubmit={onSignUp}>
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
                required: {
                  value: true,
                  message: "Introduce una contraseña",
                },
                minLength: {
                  value: 8,
                  message:
                    "Tu contraseña tiene que tener al menos 8 caracteres",
                },
              }}
            />

            <button
              className="btn btn-primary normal-case w-full"
              type="submit"
            >
              Crear cuenta
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

export default SignUp;
