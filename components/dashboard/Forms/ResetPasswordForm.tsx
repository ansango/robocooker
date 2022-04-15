import { updatePassword } from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch } from "@/lib-client/store/hooks";
import Button from "components/common/Button/Button/Button";
import { Form, Input } from "components/common/Forms";
import { useCallback } from "react";

const ResetPasswordForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    ({ oldPassword, newPassword }) => {
      dispatch(updatePassword({ oldPassword, newPassword }));
    },
    [dispatch]
  );

  return (
    <Form onSubmit={onSubmit}>
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8">
        <h5 className="text-xl font-medium text-gray-900">
          Cambio de contraseña
        </h5>
        <Input label="Contraseña actual" type="password" name="oldPassword" />
        <Input label="Nueva contraseña" type="password" name="newPassword" />
        <Button label="Guardar" type="submit" />
      </div>
    </Form>
  );
};

export default ResetPasswordForm;
