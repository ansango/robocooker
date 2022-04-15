import {
  selectAccount,
  updateAvatar,
} from "@/lib-client/store/features/account/accountSlice";
import { selectUser } from "@/lib-client/store/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import Avatar from "components/common/Avatar/Avatar";
import Button from "components/common/Button/Button/Button";
import { Form } from "components/common/Forms";
import File from "components/common/Forms/File";
import { useCallback } from "react";

const AvatarForm = () => {
  const account = useAppSelector(selectAccount);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const onSubmit = useCallback(
    async ({ file }) => {
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
    <Form onSubmit={onSubmit}>
      <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 space-y-5 flex">
        <div className="flex space-x-10">
          <div className="my-auto">
            <div className="inline-flex flex-shrink ml-1">
              <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex">
                <Avatar size="md" imgUrl={account?.avatar} />
              </div>
            </div>
          </div>
          <div className="">
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
            <Button label="Guardar" type="submit" />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AvatarForm;
