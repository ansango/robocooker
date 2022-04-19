import { SocialNetwork } from "@/models/user/user";
import { selectAccount } from "@/store/features/account";
import { updateSocial } from "@/store/features/account/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Form, Input } from "components/common/Forms";
import { FC, useCallback } from "react";

const Facebook: FC = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    ({ facebook }: SocialNetwork) => {
      if (!account) return;
      dispatch(
        updateSocial({
          ...account,
          social: { ...account.social, facebook },
        })
      );
    },
    [account, dispatch]
  );
  return (
    <Form
      onSubmit={onSubmit}
      className="flex space-x-5 col-span-full sm:col-span-6"
    >
      <Input
        type="text"
        name="facebook"
        iconSimple={{
          name: "Facebook",
        }}
        {...(account &&
          account.social &&
          account.social.facebook && {
            defaultValue: account.social.facebook,
          })}
      />

      <button type="submit" className="btn btn-primary normal-case">
        Guardar
      </button>
    </Form>
  );
};

export default Facebook;
