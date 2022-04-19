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
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import { Form, Input } from "components/common/Forms";

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
          <CardBasic>
            <CardBasicTitle title="Eliminar cuenta" />
            <Form onSubmit={() => {}}>
              <CardBasicContent>
                <p>
                  Eliminando tu cuenta, se eliminarán todos tus datos de forma
                  permanente, incluidas todas aquellas publicaciones que hayas
                  realizado.
                </p>
                <p>
                  Si deseas continuar, por favor, escribe tu contraseña actual
                  para confirmar tu solicitud.
                </p>
                <div className="grid md:grid-cols-3">
                  <Input
                    label="Contraseña"
                    type="password"
                    name="password"
                    options={{
                      required: {
                        value: true,
                        message: "Introduce tu contraseña",
                      },
                    }}
                  />
                </div>
                <button className="btn btn-error normal-case" type="button">
                  Eliminar cuenta
                </button>
              </CardBasicContent>
            </Form>
          </CardBasic>
        </div>
      </div>
    </ContainerDashboard>
  );
};

export default Profile;
