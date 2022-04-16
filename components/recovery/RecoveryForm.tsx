import { useAppDispatch } from "lib/store/hooks";
import { Form, Input } from "components/common/Forms";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { resetPassword } from "@/store/features/user/thunks";

type Props = {
  tokenId: TokenId;
};

const RecoveryForm: FC<Props> = ({ tokenId }) => {
  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  const onRecovery = useCallback(
    ({ newPassword }: { newPassword: Password }) => {
      const redirect = () => replace("/signin");
      dispatch(resetPassword({ tokenId, newPassword, redirect }));
    },
    [dispatch, tokenId, replace]
  );
  return (
    <div className="card shadow-md bg-base-100 max-w-md w-full">
      <Form onSubmit={onRecovery} className="card-body">
        <h5 className="card-title">Resetear contraseña</h5>
        <div className="space-y-4">
          <Input
            name="newPassword"
            label="Nueva contraseña"
            type="password"
            options={{
              required: { value: true, message: "Introduce una contraseña" },
              minLength: {
                value: 8,
                message: "Tu contraseña tiene que tener al menos 8 caracteres",
              },
            }}
          />
          <button className="btn btn-primary normal-case w-full" type="submit">
            Resetear
          </button>
        </div>
      </Form>
    </div>
  );
};

export default RecoveryForm;
