import Link from "next/link";
import { FC } from "react";

type propTypes = {
  valid: boolean;
};

const VerifyLink: FC<propTypes> = ({ valid }) => {
  return (
    <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
      <div className="space-y-5">
        <h5 className="text-xl font-medium text-gray-900">
          {valid ? "Email verificado!" : "Enlace invalido o expirado"}
        </h5>
        <p>
          {valid
            ? "Tu email ha sido verificado con éxito."
            : "El enlace que has utilizado para recuperar tu contraseña ha expirado o no es valido. Cierra esta ventana y vuelve a intentarlo."}
        </p>

        <p className="text-sm font-medium text-gray-500">
          <Link href="/">
            <a className="text-blue-700 hover:underline ml-1">
              Volver al inicio
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyLink;
