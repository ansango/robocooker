
import { useAppDispatch } from "lib/store/hooks";
import Button from "components/common/Button/Button/Button";
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
    <div className="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-sm sm:p-6 lg:p-8">
      <Form onSubmit={onRecovery}>
        <div className="space-y-5">
          <h5 className="text-xl font-medium text-gray-900">
            Resetear contraseña
          </h5>
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

          <Button label="Resetear" fullWidth type="submit" />
        </div>
      </Form>
    </div>
  );
};

export default RecoveryForm;
