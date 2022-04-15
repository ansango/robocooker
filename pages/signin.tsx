import { selectUser, signIn } from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import Button from "components/common/Button/Button/Button";
import GreyContainer from "components/common/Container/GreyContainer";
import { Form, Input, RadioGroup, Select } from "components/common/Forms";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";

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
      <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
        <Form onSubmit={onSignIn}>
          <div className="space-y-5">
            <h5 className="text-xl font-medium text-gray-900">Inicia sesión</h5>

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
            <p>
              <Link href="/recovery">
                <a className="text-blue-700 hover:underline text-sm">
                  ¿Olvidaste tu contraseña?
                </a>
              </Link>
            </p>
            <Button label="Iniciar sesión" fullWidth type="submit" />

            <p className="text-sm font-medium text-gray-500">
              ¿No tienes cuenta?
              <Link href="/signup">
                <a className="text-blue-700 hover:underline ml-1">
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
