import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { selectUser } from "@/store/features/user";
import { signIn } from "@/store/features/user/thunks";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import ButtonLink from "components/common/Button/ButtonLink";
import AuthLayout from "components/layout/AuthLayout";

const SignIn: NextPage = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const { replace } = useRouter();

  useEffect(() => {
    if (user) replace("/dashboard");
  }, [user, replace]);

  const onSignIn = useCallback(
    ({ email, password }: { email: Email; password: Password }) =>
      dispatch(signIn({ email, password })),
    [dispatch]
  );
  return (
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title="Inicia sesión" />
        <Form onSubmit={onSignIn}>
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
              name="password"
              label="Contraseña"
              type="password"
              options={{
                required: {
                  value: true,
                  message: "Introduce tu contraseña",
                },
              }}
            />
            <p className="text-sm">
              <ButtonLink href="/recovery" label="¿Olvidaste tu contraseña?" />
            </p>
            <button
              className="btn btn-primary normal-case w-full"
              type="submit"
            >
              Iniciar sesión
            </button>

            <p className="text-sm space-x-1">
              <span>¿No tienes cuenta?</span>
              <ButtonLink href="/signup" label="Crea una!" />
            </p>
          </CardBasicContent>
        </Form>
      </CardBasic>
    </AuthLayout>
  );
};

export default SignIn;
