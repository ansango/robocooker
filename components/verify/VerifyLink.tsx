import Link from "next/link";
import { FC } from "react";

type Props = {
  valid: boolean;
};

const VerifyLink: FC<Props> = ({ valid }) => {
  return (
    <div className="card shadow-md bg-base-100 max-w-md w-full">
      <div className="card-body">
        <h5 className="card-title">
          {valid ? "Email verificado!" : "Enlace invalido o expirado"}
        </h5>
        <div className="space-y-4">
          <p>
            {valid
              ? "Tu email ha sido verificado con éxito."
              : "El enlace que has utilizado para recuperar tu contraseña ha expirado o no es valido. Cierra esta ventana y vuelve a intentarlo."}
          </p>

          <p className="text-sm">
            <Link href="/signin">
              <a className="btn btn-link normal-case text-sm p-0 ml-1">
                Volver al inicio
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyLink;
