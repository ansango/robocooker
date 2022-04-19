import { selectUser } from "@/store/features/user";
import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import Avatar from "components/common/Avatar/Avatar";
import Button from "components/common/Button/Button/Button";
import { Form } from "components/common/Forms";
import File from "components/common/Forms/File";
import { useCallback } from "react";
import { selectAccount } from "@/store/features/account";
import { updateAvatar } from "@/store/features/account/thunks";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";

const AvatarForm = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const onSubmit = useCallback(
    async ({ file }: any) => {
      const avatar = file[0];
      const isImage = avatar ? avatar.type.startsWith("image") : null;
      if (avatar && isImage) {
        const formData = new FormData();
        formData.append("avatar", avatar);
        dispatch(updateAvatar(formData));
      }
    },
    [dispatch]
  );

  return (
    <CardBasic>
      <Form onSubmit={onSubmit}>
        <div className="w-full flex space-x-5">
          <div className="my-auto space-y-3">
            <div className="inline-flex flex-shrink ml-1">
              <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex">
                <Avatar size="md" imgUrl={account?.avatar} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary normal-case">
              Guardar
            </button>
          </div>
          <div className="space-y-4 w-full">
            {account?.firstName && (
              <h5 className="text-xl font-medium text-gray-900">
                {account.firstName} {account?.lastName}
              </h5>
            )}
            {!account?.firstName && (
              <h5 className="text-xl font-medium text-gray-900">
                @{user?.username}
              </h5>
            )}
            {account?.firstName && (
              <h4 className="text-gray-600">@{user?.username}</h4>
            )}

            <File name="file" />
          </div>
        </div>
      </Form>
    </CardBasic>
  );
};

export default AvatarForm;
