import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { selectUser } from "@/store/features/user";
import { signIn } from "@/store/features/user/thunks";

const SignIn: NextPage = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (user) router.replace("/dashboard/settings/");
  }, [user, router]);

  const onSignIn = useCallback(
    ({ email, password }: { email: Email; password: Password }) =>
      dispatch(signIn({ email, password })),
    [dispatch]
  );
  return (
    <GreyContainer>
      <div className="card shadow-md bg-base-100 max-w-md w-full">
        <Form onSubmit={onSignIn} className="card-body">
          <h5 className="card-title">Inicia sesión</h5>
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
            <Input
              name="password"
              label="Contraseña"
              type="password"
              options={{
                required: { value: true, message: "Introduce tu contraseña" },
              }}
            />

            <Link href="/recovery">
              <a className="btn btn-link normal-case text-sm p-0">
                ¿Olvidaste tu contraseña?
              </a>
            </Link>

            <button
              className="btn btn-primary normal-case w-full"
              type="submit"
            >
              Iniciar sesión
            </button>

            <p className="text-sm">
              ¿No tienes cuenta?
              <Link href="/signup">
                <a className="btn btn-link normal-case text-sm p-0 ml-1">
                  Crear cuenta
                </a>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </GreyContainer>
  );
};

export default SignIn;
