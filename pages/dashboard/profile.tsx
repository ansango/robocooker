import DataAccountForm from "components/dashboard/Forms/DataAccountForm";
import AvatarForm from "components/dashboard/Forms/AvatarForm";
import { NextPage } from "next";
import React from "react";
import ResetPasswordForm from "components/dashboard/Forms/ResetPasswordForm";
import ContainerDashboard from "components/dashboard/Container/ContainerDashboard";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import PreferencesForm from "components/dashboard/Forms/PreferencesForm";
import SocialForms from "components/dashboard/Forms/SocialForms";
import Alert from "components/common/Alert/Alert";
import DeleteAccount from "components/dashboard/Forms/DeleteAccount";

const Profile: NextPage = () => {
  return (
    <ContainerDashboard>
      <GenericDashboardHero title="Tu cuenta" />
      <div className="grid gap-5 grid-cols-12">
        <div className="col-span-full md:col-span-6 flex flex-col justify-end space-y-5">
          <Alert />
          <div></div>
          <AvatarForm />
        </div>
        <div className="col-span-full md:col-span-6">
          <ResetPasswordForm />
        </div>
        <div className="col-span-full 2xl:col-span-4">
          <PreferencesForm />
        </div>
        <div className="col-span-full 2xl:col-span-8 flex flex-col justify-start space-y-5">
          <DataAccountForm />
          <SocialForms />
          <DeleteAccount />
        </div>
      </div>
    </ContainerDashboard>
  );
};

export default Profile;
