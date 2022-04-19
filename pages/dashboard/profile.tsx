import DataAccountForm from "components/dashboard/Forms/DataAccountForm";
import AvatarForm from "components/dashboard/Forms/AvatarForm";
import { NextPage } from "next";
import React from "react";
import ResetPasswordForm from "components/dashboard/Forms/ResetPasswordForm";
import Alert from "components/common/Alert/Alert";
import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { selectUser } from "@/store/features/user";
import { verifyEmail } from "@/store/features/user/thunks";
import ContainerDashboard from "components/dashboard/Container/ContainerDashboard";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";

const Profile: NextPage = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const onVerify = () => dispatch(verifyEmail());
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="Tu cuenta" />
      {!user?.emailVerified && (
        <div className="alert alert-info shadow-lg">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Icon
                icon="InformationCircleIcon"
                kind="outline"
                className="w-5 h-5"
              />
              <span>Parece que todavía no has verificado tu email</span>
            </div>
            <button
              className="btn btn-ghost normal-case text-gray-800 btn-sm"
              onClick={onVerify}
            >
              Verificar
            </button>
          </div>
        </div>
      )}
      <div className="grid gap-5 grid-cols-12">
        <div className="col-span-full md:col-span-6">
          <AvatarForm />
        </div>
        <div className="col-span-full md:col-span-6">
          <ResetPasswordForm />
        </div>
        <div className="col-span-full">
          <DataAccountForm />
        </div>
      </div>
    </ContainerDashboard>
  );
};

export default Profile;
