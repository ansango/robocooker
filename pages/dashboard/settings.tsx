import DataAccountForm from "components/dashboard/Forms/DataAccountForm";
import AvatarForm from "components/dashboard/Forms/AvatarForm";
import { NextPage } from "next";
import React from "react";
import ResetPasswordForm from "components/dashboard/Forms/ResetPasswordForm";
import Alert from "components/common/Alert/Alert";
import { useAppDispatch, useAppSelector } from "@/lib-client/store/hooks";
import {
  selectUser,
  verifyEmail,
} from "@/lib-client/store/features/user/userSlice";

const Settings: NextPage = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const onVerify = () => dispatch(verifyEmail());
  return (
    <>
      <Alert
        text="Parece que todavía no has verificado tu email"
        opened={!user?.emailVerified}
        dismissable
        withIcon
        icon="MailIcon"
        link={{ action: onVerify, text: "Verificar email" }}
      />

      <main className="grid lg:grid-cols-12 md:space-y-0 gap-5 h-full p-5">
        <div className="col-span-full xl:col-span-5">
          <div className="gap-5 grid grid-cols-12">
            <div className="col-span-full md:col-span-6 lg:col-span-6 xl:col-span-full">
              <AvatarForm />
            </div>
            <div className="col-span-full md:col-span-6 lg:col-span-6 xl:col-span-full">
              <ResetPasswordForm />
            </div>
          </div>
        </div>
        <div className="col-span-full xl:col-span-7">
          <DataAccountForm />
        </div>
        <div className="py-10"></div>
      </main>
    </>
  );
};

export default Settings;
